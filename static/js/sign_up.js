function getCSRFToken() {
  var csrfCookie = document.cookie.match(/csrftoken=([\w-]+)/);
  if (csrfCookie) {
    return csrfCookie[1];
  }
  return null;
}

document.getElementById("checkID").addEventListener("click", (event) => {
  //   event.preventDefault();
  const userID = document.getElementById("ID").value;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/id_check", true); // 실제 서버 주소로 수정
  xhr.setRequestHeader("Content-Type", "application/json"); // json으로 바꿔서 전송
  xhr.setRequestHeader("X-CSRFToken", getCSRFToken()); // CSRF 토큰 추가
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let resultMessage = document.getElementById("id-valid");
        if (response.valid) {
          resultMessage.textContent = "사용 가능한 아이디입니다.";
        } else {
          resultMessage.textContent = "사용중인 아이디입니다.";
        }
      } else {
        console.error("Error:", xhr.statusText);
        alert(userID);
      }
    }
  };
  var data = JSON.stringify({ check_id: userID });
  console.log(data);
  xhr.send(data);
});

// HTML에서 비밀번호 입력 필드와 비밀번호 확인 입력 필드의 id를 사용해야 합니다.
let passwordInput = document.getElementById("PW");
let confirmPasswordInput = document.getElementById("checkPW");
let messageElement = document.getElementById("message");

// 비밀번호 입력 필드나 비밀번호 확인 입력 필드가 변경될 때 실행되는 함수
function checkPasswords() {
  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;
  messageElement.classList.remove("hidden");
  if (password === confirmPassword) {
    messageElement.textContent = "비밀번호가 일치합니다.";
    messageElement.style.color = "green";
    // messageElement.classList.remove("hidden");
  } else {
    messageElement.textContent = "비밀번호가 일치하지 않습니다.";
    messageElement.style.color = "red";
    // messageElement.classList.add("hidden");
  }
}

// 비밀번호 입력 필드나 비밀번호 확인 입력 필드가 변경될 때 checkPasswords 함수 호출
// passwordInput.addEventListener("input", checkPasswords);
confirmPasswordInput.addEventListener("input", checkPasswords);
