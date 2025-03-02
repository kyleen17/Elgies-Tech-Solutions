document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to Elgie's Bytes Tech Solutions";
    const typingSpeed = 100; // Adjust speed of typing (milliseconds)
    const targetElement = document.querySelector(".hero-content h1");
  
    let i = 0;
  
    function typeText() {
      if (i < text.length) {
        targetElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeText, typingSpeed);
      }
    }
  
    typeText();
  });
  