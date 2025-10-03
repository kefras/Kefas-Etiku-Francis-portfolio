// Basic interactivity: menu toggle, contact form opens mailto, set year
document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Menu toggle for small screens
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", () => {
    const nav = document.querySelector(".nav");
    nav.style.display = nav.style.display === "flex" ? "" : "flex";
  });
});

// Contact form: open mailto with fields filled
function submitContact(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please complete all fields before sending.");
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n--\nSent from portfolio site`
  );

  // opens user's email client
  window.location.href = `mailto:kefasetikufrancis@gmail.com?subject=${subject}&body=${body}`;
}
