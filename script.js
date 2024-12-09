// Array para armazenar postagens
let posts = [];

// Função para criar uma nova postagem
function createPost(imageUrl, caption) {
    const post = {
        id: posts.length + 1,
        imageUrl: imageUrl,
        caption: caption,
        likes: 0,
        comments: []
    };
    posts.push(post);
    renderPosts();
}

// Função para renderizar as postagens no feed
function renderPosts() {
    const feedContainer = document.getElementById("feed");
    feedContainer.innerHTML = ""; // Limpa o feed antes de renderizar novamente

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <div class="post-header">
                <div class="user-info">
                    <img src="avatar.png" alt="User Avatar" class="avatar">
                    <h3>UserName</h3>
                </div>
            </div>
            <img src="${post.imageUrl}" alt="Post Image" class="post-image">
            <div class="post-footer">
                <div class="reactions">
                    <button class="like-btn" onclick="toggleLike(${post.id})">❤️</button>
                    <button class="comment-btn" onclick="toggleComments(${post.id})">💬</button>
                </div>
                <div class="post-actions">
                    <h4 class="likes-count">${post.likes} curtidas</h4>
                    <p class="caption">${post.caption}</p>
                    <div class="comments" id="comments-${post.id}">
                        ${post.comments.map(comment => `<p>${comment}</p>`).join("")}
                    </div>
                    <input type="text" class="comment-input" id="comment-input-${post.id}" placeholder="Comente...">
                    <button class="comment-submit" onclick="addComment(${post.id})">Comentar</button>
                </div>
            </div>
        `;
        feedContainer.appendChild(postElement);
    });
}

// Função para curtir a postagem
function toggleLike(postId) {
    const post = posts.find(post => post.id === postId);
    post.likes = post.likes === 0 ? 1 : 0; // Alterna entre curtidas e não curtidas
    renderPosts();
}

// Função para adicionar um comentário
function addComment(postId) {
    const commentInput = document.getElementById(`comment-input-${postId}`);
    const commentText = commentInput.value;
    if (commentText) {
        const post = posts.find(post => post.id === postId);
        post.comments.push(commentText);
        commentInput.value = ""; // Limpa o campo de comentário
        renderPosts();
    }
}

// Função para enviar uma nova postagem
document.getElementById("postSubmit").addEventListener("click", function() {
    const fileInput = document.getElementById("fileInput");
    const caption = document.getElementById("postCaption").value;
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            createPost(event.target.result, caption);
        };
        reader.readAsDataURL(file);
    } else {
        alert("Por favor, selecione uma imagem ou vídeo.");
    }
});

// Inicialização
renderPosts();