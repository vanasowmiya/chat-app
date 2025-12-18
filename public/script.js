 const socket = io();

// ask username
let username = prompt("Enter your name:");

// if user clicks cancel or empty
if (!username || username.trim() === "") {
  username = "Priya";
}

function sendMessage() {
  const msg = document.getElementById("msg").value;

  if (msg.trim() !== "") {
    socket.emit("message", {
      user: username,
      text: msg
    });
  }

  document.getElementById("msg").value = "";
}

socket.on("message", (data) => {
  const div = document.createElement("div");
  div.innerText = data.user + ": " + data.text;
  document.getElementById("messages").appendChild(div);
});

