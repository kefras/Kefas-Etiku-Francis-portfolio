document.addEventListener("DOMContentLoaded", () => {
  // 1. Set the current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // 2. Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});

// 3. Contact Form Mailto Function
function submitContact(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please complete all fields before sending.");
    return;
  }

  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  // Opens the user's default email client
  window.location.href = `mailto:kefasetikufrancis@gmail.com?subject=${subject}&body=${body}`;
}