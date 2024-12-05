// Post Functionality
const postButton = document.getElementById('post-button');
const postInput = document.getElementById('post-input');
const postsContainer = document.getElementById('posts-container');

postButton.addEventListener('click', () => {
  const content = postInput.value.trim();
  if (content) {
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
      <h3>User</h3>
      <p>${content}</p>
    `;
    postsContainer.prepend(post);
    postInput.value = '';
  } else {
    alert('Please write something before posting!');
  }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.dataset.theme = 
    document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});
