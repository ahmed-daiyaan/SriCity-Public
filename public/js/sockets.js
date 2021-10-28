var selectedStation = 's1';
//Listen to data sent from server, calculate & allot to variables for display
async function initSocketIO() {
    const socket = io();
    setInterval(function () {
        
    selectedStation = document.getElementById("station").value;

    },1000)
    socket.on("data1Results", data => {

        var table = "<table class=\"table\">" +
	"                <thead>" +
	"                  <tr>" +
	"                    <th>#</th>" +
	"                    <th>Parameter</th>" +
	"                    <th>Range</th>" +
	"                    <th>Value</th>" +
	"                    <th>Units</th>" +
	"                  </tr>" +
	"                </thead>" +
	"                <tbody>" +
	"                  <tr>" +
	"                    <td>1</td>" +
	"                    <td>CO</td>" +
	"                    <td>0 to 10</td>" +
	"                    <td id=\"co\">22</td>" +
	"                    <td>mg/m3</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>2</td>" +
	"                    <td>NO2</td>" +
	"                    <td>0 to 80</td>" +
	"                    <td id=\"no2\">26</td>" +
	"                    <td>ppm</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>3</td>" +
	"                    <td>O3</td>" +
	"                    <td>22 to 44</td>" +
	"                    <td id=\"o3\">26</td>" +
	"                    <td>ppm</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>4</td>" +
	"                    <td>NO</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"no\">20</td>" +
	"                    <td>ppm</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>5</td>" +
	"                    <td>SO2</td>" +
	"                    <td>0 to 74</td>" +
	"                    <td id=\"so2\">20</td>" +
	"                    <td>ppm</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>6</td>" +
	"                    <td>PM 1</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"pm1\">20</td>" +
	"                    <td>ug/m3</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>7</td>" +
	"                    <td>PM 2.5</td>" +
	"                    <td>0 to 60</td>" +
	"                    <td id=\"pm25\">20</td>" +
	"                    <td>ug/m3</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>8</td>" +
	"                    <td>PM 10</td>" +
	"                    <td>0 to 100</td>" +
	"                    <td id=\"pm10\">20</td>" +
	"                    <td>ug/m3</td>" +
	"                  </tr>" +
	"                  " +
	"                  <tr>" +
	"                    <td>9</td>" +
	"                    <td>Noise Average</td>" +
	"                    <td>Max 75</td>" +
	"                    <td id=\"noise_average\">20</td>" +
	"                    <td>db</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>10</td>" +
	"                    <td>UV</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"uv\">20</td>" +
	"                    <td>index</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>11</td>" +
	"                    <td>CO2</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"co2\">20</td>" +
	"                    <td>ppm</td>" +
	"                  </tr>" +
	"                " +
	"                  <tr>" +
	"                    <td>12</td>" +
	"                    <td>TAMPERING ALERT</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"tampering_alert\">20</td>" +
	"                    <td>unit</td>" +
	"                  </tr>" +
	"                  " +
	"                  <tr>" +
	"                    <td>13</td>" +
	"                    <td>H2S</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"h2s\">20</td>" +
	"                    <td>ppm</td>" +
	"                  </tr>" +
	"                  " +
	"                  <tr>" +
	"                    <td>14</td>" +
	"                    <td>WSPD</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"wspd\">20</td>" +
	"                    <td>kmph</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>15</td>" +
	"                    <td>WDIR</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"wdir\">20</td>" +
	"                    <td>deg</td>" +
            "                  </tr>" +
            "<tr>"+
                   " <td>16</td>"+
                   " <td>RAINFALL</td>"+
                    "<td>-</td>"+
                   " <td id=\"rainfall\">20</td>"+
                    "<td>mm</td>"+
                 " </tr>"+
	"                </tbody>" +
	"              </table>";
        if (selectedStation == 's1') {
            document.getElementById("table").innerHTML = table;
            //     ```<table class="table">
            //     <thead>
            //       <tr>
            //         <th>#</th>
            //         <th>Parameter</th>
            //         <th>Range</th>
            //         <th>Value</th>
            //         <th>Units</th>
            //       </tr>
            //     </thead>
            //     <tbody>
            //       <tr>
            //         <td>1</td>
            //         <td>CO</td>
            //         <td>0 to 10</td>
            //         <td id="co">22</td>
            //         <td>mg/m3</td>
            //       </tr>
            //       <tr>
            //         <td>2</td>
            //         <td>NO2</td>
            //         <td>0 to 80</td>
            //         <td id="no2">26</td>
            //         <td>ppm</td>
            //       </tr>
            //       <tr>
            //         <td>3</td>
            //         <td>O3</td>
            //         <td>22 to 24</td>
            //         <td id="o3">26</td>
            //         <td>ppm</td>
            //       </tr>
            //       <tr>
            //         <td>4</td>
            //         <td>NO</td>
            //         <td>-</td>
            //         <td id="no">20</td>
            //         <td>ppm</td>
            //       </tr>
            //       <tr>
            //         <td>5</td>
            //         <td>SO2</td>
            //         <td>17 to 74</td>
            //         <td id="so2">20</td>
            //         <td>ppm</td>
            //       </tr>
            //       <tr>
            //         <td>6</td>
            //         <td>PM 1</td>
            //         <td>-</td>
            //         <td id="pm1">20</td>
            //         <td>ug/m3</td>
            //       </tr>
            //       <tr>
            //         <td>7</td>
            //         <td>PM 2.5</td>
            //         <td>0 to 60</td>
            //         <td id="pm25">20</td>
            //         <td>ug/m3</td>
            //       </tr>
            //       <tr>
            //         <td>8</td>
            //         <td>PM 10</td>
            //         <td>0 to 100</td>
            //         <td id="pm10">20</td>
            //         <td>ug/m3</td>
            //       </tr>
                  
            //       <tr>
            //         <td>9</td>
            //         <td>Noise Average</td>
            //         <td>Max 75</td>
            //         <td id="noise_average">20</td>
            //         <td>db</td>
            //       </tr>
            //       <tr>
            //         <td>10</td>
            //         <td>UV</td>
            //         <td>-</td>
            //         <td id="uv">20</td>
            //         <td>index</td>
            //       </tr>
            //       <tr>
            //         <td>11</td>
            //         <td>CO2</td>
            //         <td>-</td>
            //         <td id="co2">20</td>
            //         <td>ppm</td>
            //       </tr>
                
            //       <tr>
            //         <td>12</td>
            //         <td>TAMPERING ALERT</td>
            //         <td>-</td>
            //         <td id="tampering_alert">20</td>
            //         <td>unit</td>
            //       </tr>
                  
            //       <tr>
            //         <td>13</td>
            //         <td>h2s</td>
            //         <td>-</td>
            //         <td id="h2s">20</td>
            //         <td>ppm</td>
            //       </tr>
                  
            //       <tr>
            //         <td>14</td>
            //         <td>WSPD</td>
            //         <td>-</td>
            //         <td id="wspd">20</td>
            //         <td>kmph</td>
            //       </tr>
            //       <tr>
            //         <td>15</td>
            //         <td>WDIR</td>
            //         <td>-</td>
            //         <td id="wdir">20</td>
            //         <td>deg</td>
            //       </tr>
            //     </tbody>
            //   </table>```;
            
            document.getElementById("co").innerHTML = data["co"];
            document.getElementById("no2").innerHTML = data["no2"];
            document.getElementById("o3").innerHTML = data["o3"];
            document.getElementById("no").innerHTML = data["no"];
            document.getElementById("so2").innerHTML = data["so2"];
            document.getElementById("pm1").innerHTML = data["pm1"];
            document.getElementById("pm25").innerHTML = data["pm25"];
            document.getElementById("pm10").innerHTML = data["pm10"];
            document.getElementById("noise_average").innerHTML = data["noise_average"];
            document.getElementById("uv").innerHTML = data["uv"];
            document.getElementById("co2").innerHTML = data["co2"];
            document.getElementById("tampering_alert").innerHTML = data["tampering_alert"];
            document.getElementById("wspd").innerHTML = data["wspd"];
            document.getElementById("wdir").innerHTML = data["wdir"];
            document.getElementById("rainfall").innerHTML = data["rainfall"];
            console.log(data["t"]);
            var utcTime = new Date(parseInt(data["t"])*1000);
            document.getElementById("update_time").innerHTML = utcTime.toLocaleString();
        }

    });
    socket.on("data2Results", data => {
        var table = "<table class=\"table\">" +
	"                <thead>" +
	"                  <tr>" +
	"                    <th>#</th>" +
	"                    <th>Parameter</th>" +
	"                    <th>Range</th>" +
	"                    <th>Value</th>" +
	"                    <th>Units</th>" +
	"                  </tr>" +
	"                </thead>" +
	"                <tbody>" +
	"                  <tr>" +
	"                    <td>1</td>" +
	"                    <td>CO</td>" +
	"                    <td>0 to 2000</td>" +
	"                    <td id=\"co\">22</td>" +
	"                    <td>mg/m3</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>2</td>" +
	"                    <td>HUMIDITY</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"humidity\">22</td>" +
	"                    <td>per</td>" +
	"                  </tr>" +
	"                  " +
	"                  " +
	"                 " +
	"                  <tr>" +
	"                    <td>3</td>" +
	"                    <td>PM 1</td>" +
	"                    <td>0 to 10000</td>" +
	"                    <td id=\"pm1\">20</td>" +
	"                    <td>ug/m3</td>" +
	"                  </tr>" +
	"                  " +
	"                  <tr>" +
	"                    <td>4</td>" +
	"                    <td>PM 10</td>" +
	"                    <td>0 to 100</td>" +
	"                    <td id=\"pm10\">20</td>" +
	"                    <td>ug/m3</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>5</td>" +
	"                    <td>AIR TEMPERATURE</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"pm10\">20</td>" +
	"                    <td>degC</td>" +
	"                  </tr>" +
	"                  " +
	"                  <tr>" +
	"                    <td>6</td>" +
	"                    <td>NOISE AVERAGE</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"noise_average\">20</td>" +
	"                    <td>db</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>7</td>" +
	"                    <td>MIN VALUE OF NOISE AVERAGE</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"min_noise_level\">20</td>" +
	"                    <td>db</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>8</td>" +
	"                    <td>MAX VALUE OF NOISE AVERAGE</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"max_noise_level\">20</td>" +
	"                    <td>db</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>9</td>" +
	"                    <td>VISIBLE LIGHT VALUE</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"visible_light\">20</td>" +
	"                    <td>lux</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>10</td>" +
	"                    <td>UV</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"uv\">20</td>" +
	"                    <td>Unit</td>" +
	"                  </tr>" +
	"                  <tr>" +
	"                    <td>11</td>" +
	"                    <td>CO2</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"co2\">20</td>" +
	"                    <td>ppm</td>" +
	"                  </tr>" +
	"                " +
	"                  <tr>" +
	"                    <td>12</td>" +
	"                    <td>TAMPERING ALERT</td>" +
	"                    <td>-</td>" +
	"                    <td id=\"tampering_alert\">20</td>" +
	"                    <td>Unit</td>" +
	"                  </tr>" +
	"                  " +
	"                  " +
	"                  " +
	"                  " +
	"                </tbody>" +
	"              </table>";
        if (selectedStation == 's2') {
            document.getElementById("table").innerHTML = table;
                
            //     ```<table class="table">
            //     <thead>
            //       <tr>
            //         <th>#</th>
            //         <th>Parameter</th>
            //         <th>Range</th>
            //         <th>Value</th>
            //         <th>Units</th>
            //       </tr>
            //     </thead>
            //     <tbody>
            //       <tr>
            //         <td>1</td>
            //         <td>CO</td>
            //         <td>0 to 2000</td>
            //         <td id="co">22</td>
            //         <td>mg/m3</td>
            //       </tr>
            //       <tr>
            //         <td>2</td>
            //         <td>Humidity</td>
            //         <td>-</td>
            //         <td id="humidity">22</td>
            //         <td>per</td>
            //       </tr>
                  
                  
                 
            //       <tr>
            //         <td>3</td>
            //         <td>PM 1</td>
            //         <td>0 to 10000</td>
            //         <td id="pm1">20</td>
            //         <td>ug/m3</td>
            //       </tr>
                  
            //       <tr>
            //         <td>4</td>
            //         <td>PM 10</td>
            //         <td>0 to 100</td>
            //         <td id="pm10">20</td>
            //         <td>ug/m3</td>
            //       </tr>
            //       <tr>
            //         <td>5</td>
            //         <td>Air Temperature</td>
            //         <td>-</td>
            //         <td id="pm10">20</td>
            //         <td>degC</td>
            //       </tr>
                  
            //       <tr>
            //         <td>6</td>
            //         <td>Noise Average</td>
            //         <td>-</td>
            //         <td id="noise_average">20</td>
            //         <td>db</td>
            //       </tr>
            //       <tr>
            //         <td>7</td>
            //         <td>Min Value of Noise Average</td>
            //         <td>-</td>
            //         <td id="min_noise_level">20</td>
            //         <td>db</td>
            //       </tr>
            //       <tr>
            //         <td>8</td>
            //         <td>Max Value of Noise Average</td>
            //         <td>-</td>
            //         <td id="max_noise_level">20</td>
            //         <td>db</td>
            //       </tr>
            //       <tr>
            //         <td>9</td>
            //         <td>Visible Light Value</td>
            //         <td>-</td>
            //         <td id="visible_light">20</td>
            //         <td>lux</td>
            //       </tr>
            //       <tr>
            //         <td>10</td>
            //         <td>UV</td>
            //         <td>-</td>
            //         <td id="uv">20</td>
            //         <td>Unit</td>
            //       </tr>
            //       <tr>
            //         <td>11</td>
            //         <td>CO2</td>
            //         <td>-</td>
            //         <td id="co2">20</td>
            //         <td>ppm</td>
            //       </tr>
                
            //       <tr>
            //         <td>12</td>
            //         <td>TAMPERING ALERT</td>
            //         <td>-</td>
            //         <td id="tampering_alert">20</td>
            //         <td>Unit</td>
            //       </tr>
                  
                  
                  
                  
            //     </tbody>
            //   </table>```;
            
            document.getElementById("co").innerHTML = data["co"];
            
            document.getElementById("pm1").innerHTML = data["pm1"];
            
            document.getElementById("pm10").innerHTML = data["pm10"];
            
            document.getElementById("humidity").innerHTML = data["humidity"];
            document.getElementById("noise_average").innerHTML = data["noise_average"];
            document.getElementById("min_noise_level").innerHTML = data["min_noise_level"];
            document.getElementById("max_noise_level").innerHTML = data["max_noise_level"];
            document.getElementById("visible_light").innerHTML = data["visible_light"];
            document.getElementById("uv").innerHTML = data["uv"];
            document.getElementById("co2").innerHTML = data["co2"];
            
            document.getElementById("tampering_alert").innerHTML = data["tampering_alert"];
            
           
            document.getElementById("air_temperature").innerHTML = data["air_temperature"];
            
            console.log(data["t"]);
            var utcTime = new Date(parseInt(data["t"])*1000);
            document.getElementById("update_time").innerHTML = utcTime.toLocaleString();
        }
        
    });

}
initSocketIO();
