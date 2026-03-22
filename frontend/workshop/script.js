const API = "http://localhost:5000/workshop";

async function loadData() {
  const res = await fetch(API);
  const data = await res.json();

  const container = document.getElementById("dashboard");
  container.innerHTML = "";

  Object.keys(data).forEach(line => {
    const lineDiv = document.createElement("div");
    lineDiv.className = "line";
    lineDiv.innerHTML = `<h2>${line}</h2>`;

    const roomsDiv = document.createElement("div");
    roomsDiv.className = "rooms";

    Object.keys(data[line]).forEach(room => {
      const roomDiv = document.createElement("div");
      roomDiv.className = "room";
      roomDiv.innerHTML = `<h3>${room}</h3>`;

      Object.entries(data[line][room]).forEach(([k, v]) => {
        const el = document.createElement("div");
        el.className = "workstation";
        el.innerHTML = `<span>${k}</span><span>${v}</span>`;
        roomDiv.appendChild(el);
      });

      roomsDiv.appendChild(roomDiv);
    });

    lineDiv.appendChild(roomsDiv);
    container.appendChild(lineDiv);
  });
}

setInterval(loadData, 1000);
loadData();