document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.querySelector('.floating-hearts');
  
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 3 + Math.random() * 5 + "s";
      heartsContainer.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 8000);
    }
  
    setInterval(createHeart, 300);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.querySelector('.floating-hearts');
  
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        heart.style.animationDuration = 3 + Math.random() * 5 + "s"; // Random speed
        heartsContainer.appendChild(heart);
  
        setTimeout(() => {
            heart.remove(); // Remove heart after animation ends
        }, 8000); // Duration matches the animation time
    }
  
    setInterval(createHeart, 300); // Create a new heart every 300ms
});
