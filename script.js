let posts = [];  // Array para armazenar postagens
let messages = []; // Array para armazenar mensagens

// Função para criar uma nova postagem
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

// Função para renderizar postagens no feed
function renderPosts() {
    const feedContainer = document.getElementById("feed");
    feedContainer.innerHTML = "";  // Limpar o feed

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

// Função para curtir postagem
function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes += 1;
    renderPosts();
}

// Função para comentar postagem
function commentPost(postId) {
    const comment = prompt("Digite seu comentário:");
    if (comment) {
        const post = posts.find(p => p.id === postId);
        post.comments.push(comment);
        renderPosts();
    }
}

// Função para enviar mensagem
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

// Função para criar postagem ao clicar no botão
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

// Inicializa o feed de postagens
renderPosts();
