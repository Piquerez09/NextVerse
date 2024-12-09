// Script para interação básica de posts
document.querySelectorAll('.post button').forEach(button => {
  button.addEventListener('click', () => {
      alert('Você interagiu com o post!');
  });
});
