document.addEventListener("DOMContentLoaded", () => {
  const signupContainer = document.querySelector("#signup-container");
  const signupBtn = document.querySelector("#signup-mypage");
  signupBtn.addEventListener("click", () => {
    if (signupBtn.classList[0] === "sign_up") {
      signupContainer.classList.remove("hidden");
    } else {
      window.location.href = "/my_page";
    }
  });

  window.addEventListener("click", (e) => {
    e.target === signupContainer
      ? signupContainer.classList.add("hidden")
      : false;
  });
});
