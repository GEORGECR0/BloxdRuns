window.addEventListener("load", () => {
  const welcome = document.getElementById("welcome");
  setTimeout(() => {
    welcome.style.display = "none";
  }, 2800);
});

  const buttons = document.querySelectorAll(".nav-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".nav-btn.active")?.classList.remove("active");
      btn.classList.add("active");
    });
  });

const continueBtn = document.querySelector(".continue-btn");
const welcomeBox = document.querySelector(".welcome-box");
const mainMenu = document.querySelector(".main-menu");

continueBtn.addEventListener("click", () => {
  welcomeBox.style.display = "none";
  continueBtn.style.display = "none";
  mainMenu.style.display = "flex";
});
