// Here we have all the regular expressions to validate.
const expressions = {
  username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letters, numbers, hyphen and underscore
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces can carry accents.
  password: /^.{4,12}$/, // 4 to 12 digits.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/, // 7 to 14 numbers.
};

const d = document;

const $form = d.getElementById("form");
const $inputs = d.querySelectorAll(".form__grupo");

// We put all the fields in false to later verify that they are correct.
const fields = {
  username: false,
  name: false,
  password: false,
  password2: false,
  email: false,
  phone: false,
};

// We validate each field of the form.
const validateForm = (e) => {
  switch (e.target.name) {
    case "username":
      validateField(e.target, "username", expressions.username);
      break;
    case "name":
      validateField(e.target, "name", expressions.name);
      break;
    case "password":
      validatePassword2();
      validateField(e.target, "password", expressions.password);
      break;
    case "password2":
      validatePassword2();
      break;
    case "email":
      validateField(e.target, "email", expressions.email);
      break;
    case "phone":
      validateField(e.target, "phone", expressions.phone);
      break;
  }
};

// We create the validation of each field.
const validateField = (input, field, expression) => {
  if (!expression.test(input.value)) {
    d.getElementById(`form__grupo-${field}`).classList.add("invalid");
    d.getElementById(`form__grupo-${field}`).classList.remove("valid");
    d.querySelector(`.form__grupo-${field} i`).classList.remove(
      "bxs-check-circle"
    );
    d.querySelector(`.form__grupo-${field} i`).classList.add("bxs-x-circle");
    fields[field] = false;
  } else {
    d.getElementById(`form__grupo-${field}`).classList.add("valid");
    d.getElementById(`form__grupo-${field}`).classList.remove("invalid");
    d.querySelector(`.form__grupo-${field} i`).classList.add(
      "bxs-check-circle"
    );
    d.querySelector(`.form__grupo-${field} i`).classList.remove("bxs-x-circle");
    fields[field] = true;
  }
};

// We create the validation of the password to verify, since it is different
const validatePassword2 = () => {
  const password1 = d.querySelector("#password");
  const password2 = d.querySelector("#password2");
  if (password1.value !== password2.value) {
    d.getElementById(`form__grupo-password2`).classList.add("invalid");
    d.getElementById(`form__grupo-password2`).classList.remove("valid");
    d.querySelector(`.form__grupo-password2 i`).classList.remove(
      "bxs-check-circle"
    );
    d.querySelector(`.form__grupo-password2 i`).classList.add("bxs-x-circle");
    fields["password2"] = false;
  } else {
    d.getElementById(`form__grupo-password2`).classList.add("valid");
    d.getElementById(`form__grupo-password2`).classList.remove("invalid");
    d.querySelector(`.form__grupo-password2 i`).classList.add(
      "bxs-check-circle"
    );
    d.querySelector(`.form__grupo-password2 i`).classList.remove(
      "bxs-x-circle"
    );
    fields["password2"] = true;
  }
};

// We attach the 'click' and 'blur' events to the inputs.
$inputs.forEach((el) => {
  el.addEventListener("keyup", validateForm);
  el.addEventListener("blur", validateForm);
});

// we set the 'submit' event to be able to submit the form.
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const error = d.querySelector(".box-error");
  const send = d.querySelector(".box-send");
  const checkbox = d.getElementById("checkbox");

  // We verify that all the fields are true in order to submit the form.
  if (
    fields.username === true &&
    fields.name === true &&
    fields.password === true &&
    fields.password2 === true &&
    fields.email === true &&
    fields.phone === true &&
    checkbox.checked
  ) {
    error.style.display = "none";
    send.style.display = "block";
    $inputs.forEach(el => el.classList.remove('valid'));
    $form.reset();
    setTimeout(() => {
      send.style.display = "none";
    }, 2000);
  } else {
    error.style.display = "block";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
  }
});
