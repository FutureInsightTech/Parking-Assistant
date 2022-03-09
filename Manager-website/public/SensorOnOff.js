var socket = io.connect("http://localhost:3000/");

socket.on("data", function (data) {
  var res = data.split(" ");
  if (res[0] + res[1] === "Sensor1:") {
    document.getElementById("sensor1").innerHTML = res[0] + res[1];
    document.getElementById("sensor1On/Off").innerHTML = res[2];
    if (res[2] === "1") {
      document.getElementById("sensor1ParkOn").innerHTML =
        " <i class='fa-solid fa-square-parking fa-3x' style='color:green;height: 50px;width: 50px;'></i>";
    }
    if (res[2] === "0") {
      document.getElementById("sensor1ParkOn").innerHTML =
        " <i class='fa-solid fa-square-parking fa-3x' style='color:red;height: 50px;width: 50px;'></i>";
    }
  }

  if (res[0] + res[1] === "Sensor2:") {
    document.getElementById("sensor2").innerHTML = res[0] + res[1];
    document.getElementById("sensor2On/Off").innerHTML = res[2];
    if (res[2] === "1") {
      document.getElementById("sensor2ParkOn").innerHTML =
        " <i class='fa-solid fa-square-parking fa-3x' style='color:green;height: 50px;width: 50px;'></i>";
    }
    if (res[2] === "0") {
      document.getElementById("sensor2ParkOn").innerHTML =
        " <i class='fa-solid fa-square-parking fa-3x' style='color:red;height: 50px;width: 50px;'></i>";
    }
  }
  if (res[0] + res[1] === "Sensor3:") {
    document.getElementById("sensor3").innerHTML = res[0] + res[1];
    document.getElementById("sensor3On/Off").innerHTML = res[2];
    if (res[2] === "1") {
      document.getElementById("sensor3ParkOn").innerHTML =
        " <i class='fa-solid fa-square-parking fa-3x' style='color:green;height: 50px;width: 50px;'></i>";
    }
    if (res[2] === "0") {
      document.getElementById("sensor3ParkOn").innerHTML =
        " <i class='fa-solid fa-square-parking fa-3x' style='color:red;height: 50px;width: 50px;'></i>";
    }
  }
  if (res[0] + res[1] === "Sensor4:") {
    document.getElementById("sensor4").innerHTML = res[0] + res[1];
    document.getElementById("sensor4On/Off").innerHTML = res[2];
    if (res[2] === "1") {
      document.getElementById("sensor4ParkOn").innerHTML =
        " <i class='fa-solid fa-square-parking fa-3x' style='color:green;height: 50px;width: 50px;'></i>";
    }
    if (res[2] === "0") {
      document.getElementById("sensor4ParkOn").innerHTML =
        " <i class='fa-solid fa-square-parking fa-3x' style='color:red;height: 50px;width: 50px;'></i>";
    }
  }
  if (res[0] + res[1] === "Sensor5:") {
    document.getElementById("sensor5").innerHTML = res[0] + res[1];
    document.getElementById("sensor5On/Off").innerHTML = res[2];
    if (res[2] === "1") {
      document.getElementById("sensor5ParkOn").innerHTML =
        " <i class='fa-solid fa-square-parking fa-3x' style='color:green;height: 50px;width: 50px;'></i>";
    }
    if (res[2] === "0") {
      document.getElementById("sensor5ParkOn").innerHTML =
        " <i class='fa-solid fa-square-parking fa-3x' style='color:red;height: 50px;width: 50px;'></i>";
    }
  }
});
