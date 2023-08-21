const container = document.querySelector(".container");
const successScreen = document.querySelector(".success-screen");
const displayEmail = document.querySelector("#span-email");
const input = document.querySelector("#email-input");
const error = document.querySelector("#error-msg");

const validateEmail = () => {
  error.replaceChildren();
  const inputValue = input.value;
  if (String(inputValue).length === 0) {
    error.append("*Email is Required");
    input.classList.add("input-error");
    error.classList.remove("hidden");
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)
  ) {
    input.classList.add("input-error");
    error.append("*Invalid Email");
    error.classList.remove("hidden");
  } else {
    container.classList.add("hidden");
    successScreen.classList.remove("hidden");
    displayEmail.append(inputValue);
  }
};

document.getElementById("submit-btn").addEventListener("click", validateEmail);
document.getElementById("dismiss-btn").addEventListener("click", () => {
  input.value = "";
  input.classList.remove("input-error");
  container.classList.remove("hidden");
  successScreen.classList.add("hidden");
  error.classList.remove("hidden");
});
