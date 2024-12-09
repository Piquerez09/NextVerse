// Funcionalidade para adicionar postagens
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
  likeButton.textContent = 'Curtir (0)';
  likeButton.onclick = function() {
      let likeCount = parseInt(likeButton.textContent.split(' ')[1]) + 1;
      likeButton.textContent = `Curtir (${likeCount})`;
  };

  let commentButton = document.createElement('button');
  commentButton.textContent = 'Comentar';
  let commentSection = document.createElement('div');
  commentSection.classList.add('comments-section');

  // Adicionar funcionalidade para comentar
  let commentInput = document.createElement('input');
  let commentSubmitButton = document.createElement('button');
  commentSubmitButton.textContent = 'Enviar';
  commentSubmitButton.onclick = function() {
      if (commentInput.value.trim() !== "") {
          let newComment = document.createElement('div');
          newComment.classList.add('comment');
          newComment.textContent = commentInput.value;
          commentSection.appendChild(newComment);
          commentInput.value = '';
      }
  };

  commentSection.appendChild(commentInput);
  commentSection.appendChild(commentSubmitButton);

  newPost.appendChild(postTitle);
  newPost.appendChild(postContent);
  newPost.appendChild(likeButton);
  newPost.appendChild(commentButton);
  newPost.appendChild(commentSection);

  // Adicionar o novo post ao feed
  document.getElementById('feed').prepend(newPost);

  // Limpar o campo de texto após o post
  document.getElementById('postText').value = '';
});

// Funcionalidade para o chat
document.getElementById('sendChat').addEventListener('click', function() {
  let chatMessage = document.getElementById('chatMessage').value;
  if (chatMessage.trim() !== "") {
      let chatBox = document.getElementById('chatBox');
      let newMessage = document.createElement('div');
      newMessage.textContent = chatMessage;
      chatBox.appendChild(newMessage);
      document.getElementById('chatMessage').value = '';
  }
});
