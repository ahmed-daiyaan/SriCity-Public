//Listen to data sent from server, calculate & allot to variables for display
async function initSocketIO() {
    const socket = io();
    setInterval(function () {
        
    selectedStation = document.getElementById("station").value;

    },1000)
    socket.on("data1Results", data => {
        if (selectedStation == 's1') {
            document.getElementById("battery_level").innerHTML = data["battery_level"];
            document.getElementById("co").innerHTML = data["co"];
            document.getElementById("no2").innerHTML = data["no2"];
            document.getElementById("o3").innerHTML = data["o3"];
            document.getElementById("no").innerHTML = data["no"];
            document.getElementById("so2").innerHTML = data["so2"];
            document.getElementById("pm1").innerHTML = data["pm1"];
            document.getElementById("pm25").innerHTML = data["pm25"];
            document.getElementById("pm10").innerHTML = data["pm10"];
            document.getElementById("ambient_temperature").innerHTML = data["ambient_temperature"];
            document.getElementById("humidity").innerHTML = data["humidity"];
            document.getElementById("noise_average").innerHTML = data["noise_average"];
            document.getElementById("min_noise_level").innerHTML = data["min_noise_level"];
            document.getElementById("max_noise_level").innerHTML = data["max_noise_level"];
            document.getElementById("visible_light").innerHTML = data["visible_light"];
            document.getElementById("uv").innerHTML = data["uv"];
            document.getElementById("co2").innerHTML = data["co2"];
            document.getElementById("pressure").innerHTML = data["pressure"];
            document.getElementById("tampering_alert").innerHTML = data["tampering_alert"];
            document.getElementById("co_aux").innerHTML = data["co_aux"];
            document.getElementById("co_we").innerHTML = data["co_we"];
            document.getElementById("no2_aux").innerHTML = data["no2_aux"];
            document.getElementById("no2_we").innerHTML = data["no2_we"];
            document.getElementById("o3_aux").innerHTML = data["o3_aux"];
            document.getElementById("o3_we").innerHTML = data["o3_we"];
            document.getElementById("so2_aux").innerHTML = data["so2_aux"];
            document.getElementById("so2_we").innerHTML = data["so2_we"];
            document.getElementById("h2s").innerHTML = data["h2s"];
            document.getElementById("h2s_we").innerHTML = data["h2s_we"];
            document.getElementById("h2s_aux").innerHTML = data["h2s_aux"];
            document.getElementById("wspd").innerHTML = data["wspd"];
            document.getElementById("wdir").innerHTML = data["wdir"];
            document.getElementById("air_temperature").innerHTML = data["air_temperature"];
            
            console.log(data["t"]);
            var utcTime = new Date(parseInt(data["t"]));
            document.getElementById("update_time").innerHTML = utcTime.toLocaleString();
        }

    });
    socket.on("data2Results", data => {
        if (selectedStation == 's2') {
            document.getElementById("battery_level").innerHTML = data["battery_level"];
            document.getElementById("co").innerHTML = data["co"];
            document.getElementById("no2").innerHTML = data["no2"];
            document.getElementById("o3").innerHTML = data["o3"];
            document.getElementById("no").innerHTML = data["no"];
            document.getElementById("so2").innerHTML = data["so2"];
            document.getElementById("pm1").innerHTML = data["pm1"];
            document.getElementById("pm25").innerHTML = data["pm25"];
            document.getElementById("pm10").innerHTML = data["pm10"];
            document.getElementById("ambient_temperature").innerHTML = data["ambient_temperature"];
            document.getElementById("humidity").innerHTML = data["humidity"];
            document.getElementById("noise_average").innerHTML = data["noise_average"];
            document.getElementById("min_noise_level").innerHTML = data["min_noise_level"];
            document.getElementById("max_noise_level").innerHTML = data["max_noise_level"];
            document.getElementById("visible_light").innerHTML = data["visible_light"];
            document.getElementById("uv").innerHTML = data["uv"];
            document.getElementById("co2").innerHTML = data["co2"];
            document.getElementById("pressure").innerHTML = data["pressure"];
            document.getElementById("tampering_alert").innerHTML = data["tampering_alert"];
            document.getElementById("co_aux").innerHTML = data["co_aux"];
            document.getElementById("co_we").innerHTML = data["co_we"];
            document.getElementById("no2_aux").innerHTML = data["no2_aux"];
            document.getElementById("no2_we").innerHTML = data["no2_we"];
            document.getElementById("o3_aux").innerHTML = data["o3_aux"];
            document.getElementById("o3_we").innerHTML = data["o3_we"];
            document.getElementById("so2_aux").innerHTML = data["so2_aux"];
            document.getElementById("so2_we").innerHTML = data["so2_we"];
            document.getElementById("h2s").innerHTML = data["h2s"];
            document.getElementById("h2s_we").innerHTML = data["h2s_we"];
            document.getElementById("h2s_aux").innerHTML = data["h2s_aux"];
            document.getElementById("wspd").innerHTML = data["wspd"];
            document.getElementById("wdir").innerHTML = data["wdir"];
            document.getElementById("air_temperature").innerHTML = data["air_temperature"];
            
            console.log(data["t"]);
            var utcTime = new Date(parseInt(data["t"]));
            document.getElementById("update_time").innerHTML = utcTime.toLocaleString();
        }
        
    });

}
initSocketIO();
