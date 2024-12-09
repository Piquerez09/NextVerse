let posts = [];
let messages = [];

// Criar novo post
function createPost(text, media) {
    const post = {
        id: posts.length + 1,
        text: text,
        media: media,
        likes: 0,
        comments: []
    };
    posts.push(post);
    renderPosts();
}

// Renderizar posts
function renderPosts() {
    const feedContainer = document.getElementById("feed");
    feedContainer.innerHTML = "";

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <div class="post-content">
                <p>${post.text}</p>
                ${post.media ? `<img src="${post.media}" alt="Post Media">` : ""}
                <div class="post-actions">
                    <button onclick="likePost(${post.id})">Curtir ❤️</button>
                    <button onclick="commentPost(${post.id})">Comentar 💬</button>
                </div>
                <div class="comments">
                    ${post.comments.map(comment => `<p>${comment}</p>`).join("")}
                </div>
            </div>
        `;
        feedContainer.appendChild(postElement);
    });
}

// Curtir post
function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes += 1;
    renderPosts();
}

// Comentar post
function commentPost(postId) {
    const comment = prompt("Digite seu comentário:");
    if (comment) {
        const post = posts.find(p => p.id === postId);
        post.comments.push(comment);
        renderPosts();
    }
}

// Enviar mensagem
document.getElementById("sendMessage").addEventListener("click", function() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    if (message) {
        messages.push(message);
        messageInput.value = "";
        renderMessages();
    }
});

// Renderizar mensagens
function renderMessages() {
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = messages.map(message => `<p>${message}</p>`).join("");
}

// Submeter post
document.getElementById("postSubmit").addEventListener("click", function() {
    const postText = document.getElementById("postText").value;
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            createPost(postText, event.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        createPost(postText, null);
    }
});

// Logout
document.getElementById("logoutButton").addEventListener("click", function() {
    alert("Você saiu da sua conta.");
    // Redirecionar para página de login
});
// Configuração do Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

// Criação de usuário com email e senha
function signUp(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          alert("Usuário criado com sucesso!");
          window.location.href = "feed.html"; // Página do feed após o login
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`Erro: ${errorMessage}`);
      });
}

// Login de usuário
function login(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          window.location.href = "feed.html"; // Página do feed após o login
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`Erro: ${errorMessage}`);
      });
}
