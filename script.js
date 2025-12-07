const puter = new Puter();

document.getElementById("googleLogin").onclick = async () => {
  try {
    const user = await puter.auth.signInWithOAuth("google", {
      clientId: "813275968419-0hleihr80b9fktej5n07locu40ofm4fr.apps.googleusercontent.com"
    });
    console.log("Logged in user:", user);
    alert(`Hello, ${user.name || "User"}!`);
  } catch (err) {
    console.error("Login failed:", err);
    alert("Login failed. See console for details.");
  }
};




  const buttons = document.querySelectorAll(".nav-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".nav-btn.active")?.classList.remove("active");
      btn.classList.add("active");
    });
  });

