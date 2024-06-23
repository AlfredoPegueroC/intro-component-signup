const nameInput = document.querySelector("#name");
const last = document.querySelector("#Last");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");

const labelName = document.querySelector(".labelName");
const labelLast = document.querySelector(".labelLast");
const labelEmail = document.querySelector(".labelEmail");
const labelPass = document.querySelector(".labelPass");

const message = document.querySelectorAll(".message");

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  showError(nameInput, labelName);
  showError(last, labelLast);
  validateEmail(email, labelEmail);
  showError(pass, labelPass);
});

function showError(input, label) {
  if (!input.value) {
    input.classList.add("error");
    label.classList.add("active");
  }
}
function validateEmail(input, label) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!input.value || !emailRegex.test(input.value)) {
    input.classList.add("error");
    label.classList.add("active");
  }
}
