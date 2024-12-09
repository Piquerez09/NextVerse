// Funcionalidade para adicionar posts
document.getElementById('postButton').addEventListener('click', function() {
  let postText = document.getElementById('postText').value;
  if (postText.trim() === "") {
      alert("Por favor, escreva algo para postar.");
      return;
  }

  // Criar uma nova postagem no feed
  let newPost = document.createElement('div');
  newPost.classList.add('post');
  
  let postTitle = document.createElement('h3');
  postTitle.textContent = 'Novo Post';
  let postContent = document.createElement('p');
  postContent.textContent = postText;

  let likeButton = document.createElement('button');
  likeButton.textContent = 'Curtir';
  
  let commentButton = document.createElement('button');
  commentButton.textContent = 'Comentar';

  newPost.appendChild(postTitle);
  newPost.appendChild(postContent);
  newPost.appendChild(likeButton);
  newPost.appendChild(commentButton);

  // Adicionar o novo post ao feed
  document.getElementById('feed').prepend(newPost);

  // Limpar o campo de texto após o post
  document.getElementById('postText').value = '';
});
