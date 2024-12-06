// Função para login simulado
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
      // Esconde a tela de login e mostra o feed
      document.querySelector(".login-container").style.display = "none";
      document.getElementById("feedContainer").style.display = "block";
  } else {
      alert("Por favor, preencha todos os campos.");
  }
}

// Função para logout
function logout() {
  document.querySelector(".login-container").style.display = "block";
  document.getElementById("feedContainer").style.display = "none";
}

// Função para criar novo post
function createPost() {
  const postContent = document.getElementById("newPost").value;
  if (postContent) {
      const postList = document.getElementById("postsList");
      const newPost = document.createElement("div");
      newPost.classList.add("post");

      newPost.innerHTML = `
          <div class="post-header">
              <span class="username">Usuário</span> 
              <span class="post-time">Agora</span>
          </div>
          <p>${postContent}</p>
      `;
      postList.appendChild(newPost);
      document.getElementById("newPost").value = ''; // Limpa o campo
  } else {
      alert("O conteúdo do post não pode estar vazio.");
  }
}
