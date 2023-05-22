const formLogin = document.querySelector(".login-form");
console.log(formLogin);
formLogin.addEventListener("submit", goFormLogin);

const user = {};

function goFormLogin(e) {

  const mail = e.currentTarget.elements.email;
  const password = e.currentTarget.elements.password;

  if (mail.value === "" || password.value === "") {
    alert("Bсі поля повинні бути заповнені!");
  } else {
    user.mail = mail.value;
    user.password = password.value;
    console.log(user);
  }
  e.preventDefault();
  e.currentTarget.reset();
}
