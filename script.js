// Pseudo-funcionalidade para postagens, chat e feed inteligente
document.getElementById("createPostBtn").addEventListener("click", function() {
  let postContent = document.getElementById("createPostText").value;
  if(postContent.trim()) {
      let postElement = document.createElement("div");
      postElement.innerHTML = `<p><strong>Você:</strong> ${postContent}</p><button>Curtir</button><button>Comentar</button>`;
      document.querySelector(".feed .feed-content").prepend(postElement);
  }
  document.getElementById("createPostText").value = ""; // Limpar campo
});

document.getElementById("sendMessageBtn").addEventListener("click", function() {
  let message = document.getElementById("chatMessage").value;
  if(message.trim()) {
      let messageElement = document.createElement("div");
      messageElement.innerHTML = `<strong>Você:</strong> ${message}`;
      document.getElementById("chatBox").appendChild(messageElement);
  }
  document.getElementById("chatMessage").value = ""; // Limpar campo
});