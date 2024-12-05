// Post Functionality
const postButton = document.getElementById('post-button');
const postInput = document.getElementById('post-input');
const postsContainer = document.getElementById('posts-container');

// Handle Post Creation
postButton.addEventListener('click', () => {
  const postContent = postInput.value.trim();
  if (postContent) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>Anonymous</h3>
      <p>${postContent}</p>
    `;
    postsContainer.prepend(postElement);
    postInput.value = ''; // Clear input
  } else {
    alert('Please enter some text before posting!');
  }
});
