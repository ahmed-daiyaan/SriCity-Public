var dbConfig = {
  server: 'localhost',
  database: 'TestDB',
  user: 'SA',
  password: 'EverymanAKing1.',
  port: 1433,
  options: {
    trustServerCertificate: true
  }
};

const sql = require('mssql');
const engine = require("consolidate")
const path = require("path")
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
app.use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .engine("html", engine.mustache)
  .set("view engine", "html")
  .get("/", (req, res) => res.render("index.html"))
const server = http.createServer(app);
const io = socketIo(server);
let interval;
io.on("connection", (socket) => {
  console.log("New client connected");
  // getData(socket);

  socket.on("disconnect", () => console.log("Client disconnected"));

  global.db = sql.connect(dbConfig, function (err) {
    if (err) console.log(err);
    console.log("Connected to DB");
    getData(socket);
  });
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getData(socket), 600);
});
const getData = async (socket) => {
  try {
    var request = new sql.Request();

    // query to the database and get the records [Aeron universal ID] = 240091603705960,240091602581953
    request.query(
      "SELECT TOP 1 * FROM Data WHERE [Aeron universal ID] = 240091603705960 ORDER BY SrNo DESC;",
      function (err, result) {
        if (err) console.log(err);
        console.log(result);
        socket.emit("data1Results", result["recordset"][0]);
      }
    );
    request.query(
      "SELECT TOP 1 * FROM Data WHERE [Aeron universal ID] = 240091602581953 ORDER BY SrNo DESC;",
      function (err, result) {
        if (err) console.log(err);
        console.log(result);
        socket.emit("data2Results", result["recordset"][0]);
      }
    );
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};
server.listen(8000, () => console.log('Listening on port 8000'));