const signupContainer = document.querySelector("#signup-container");
const signupBtn = document.querySelector(".sign_up");


signupBtn.addEventListener("click", () => {
  signupContainer.classList.remove("hidden");
});

window.addEventListener("click", (e) => {
  e.target === signupContainer
    ? signupContainer.classList.add("hidden")
    : false;
});
