document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('like-button');
    const likeCount = document.getElementById('like-count');
    const likeIcon = document.getElementById('like-icon');
    const congratulationMessage = document.getElementById('congratulation-message');
  
    // Retrieve like count and user like state from localStorage
    let count = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0;
    let hasLiked = localStorage.getItem('hasLiked') === 'true';
  
    // Initialize like count and icon
    likeCount.textContent = count;
    if (hasLiked) {
      likeButton.classList.add('liked');
      likeIcon.innerHTML = '&#x1F44D;'; // thumbs-up when liked
    } else {
      likeIcon.innerHTML = '&#x1F44D;'; // thumbs-up icon by default
    }
  
    likeButton.addEventListener('click', () => {
      // If the user has already liked, do nothing
      if (hasLiked) return;
  
      // Mark as liked and update the count
      count++;
      hasLiked = true;
  
      // Store the like state and count in localStorage
      localStorage.setItem('likeCount', count);
      localStorage.setItem('hasLiked', 'true');
  
      // Update the button appearance and like count
      likeButton.classList.add('liked');
      likeCount.textContent = count;
      likeIcon.innerHTML = '&#x1F44D;'; // thumbs-up emoji
  
      // Show congratulatory message
      congratulationMessage.style.display = 'block';
      
      // Hide the congratulation message after 3 seconds
      setTimeout(() => {
        congratulationMessage.style.display = 'none';
      }, 3000);
  
      // Prevent further clicking by disabling the button
      likeButton.disabled = true;
    });
  });
  