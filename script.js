// Sistema de Usuários Fictícios
const users = [
  { id: 1, name: "Usuário XYZ", avatar: "user-avatar.jpg", bio: "Apaixonado por tecnologia e inovação!" },
  { id: 2, name: "Usuário ABC", avatar: "user-avatar2.jpg", bio: "Criador de conteúdo e entusiasta das redes sociais!" }
];

let currentUser = users[0]; // Usuário logado (simulado)

// Função para adicionar postagens
document.getElementById('postButton').addEventListener('click', function() {
  let postText = document.getElementById('postText').value;
  if (postText.trim() === "") {
      alert("Por favor, escreva algo para postar.");
      return;
  }

  let newPost = document.createElement('div');
  newPost.classList.add('post');
  
  // Mostrar quem postou
  let postTitle = document.createElement('h3');
  postTitle.textContent = `${currentUser.name} (Você)`;
  
  let postContent = document.createElement('p');
  postContent.textContent = postText;

  // Botões de Curtir e Comentar
  let likeButton = document.createElement('button');
  likeButton.textContent = 'Curtir (0)';
  let commentButton = document.createElement('button');
  commentButton.textContent = 'Comentar';
  let commentSection = document.createElement('div');
  commentSection.classList.add('comments-section');

  let commentInput = document.createElement('input');
  let commentSubmitButton = document.createElement('button');
  commentSubmitButton.textContent = 'Enviar';
  commentSubmitButton.onclick = function() {
      if (commentInput.value.trim() !== "") {
          let newComment = document.createElement('div');
          newComment.classList.add('comment');
          newComment.textContent = `${currentUser.name}: ${commentInput.value}`;
          commentSection.appendChild(newComment);
          commentInput.value = '';
      }
  };

  commentSection.appendChild(commentInput);
  commentSection.appendChild(commentSubmitButton);

  // Append tudo à postagem
  newPost.appendChild(postTitle);
  newPost.appendChild(postContent);
  newPost.appendChild(likeButton);
  newPost.appendChild(commentButton);
  newPost.appendChild(commentSection);

  // Adicionar post ao feed
  document.getElementById('feed').prepend(newPost);

  // Limpar campo de postagem
  document.getElementById('postText').value = '';
});

// Função para o Chat
document.getElementById('sendChat').addEventListener('click', function() {
  let chatMessage = document.getElementById('chatMessage').value;
  if (chatMessage.trim() !== "") {
      let chatBox = document.getElementById('chatBox');
      let newMessage = document.createElement('div');
      newMessage.textContent = `${currentUser.name}: ${chatMessage}`;
      chatBox.appendChild(newMessage);
      document.getElementById('chatMessage').value = '';
  }
});