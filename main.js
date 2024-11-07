const form = document.querySelector(".formulario__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreField = form.querySelector("#nombre");
  const apellidoField = form.querySelector("#apellido");
  const emailField = form.querySelector("#email");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (nombreField.value === "") {
    Toastify({
      text: "Por favor, ingresa tu nombre",
      duration: 3000,
      backgroundColor: "linear-gradient(to right, #FFCCCC, #FFCCCC)",
      className: "toastify",
    }).showToast();
  }

  if (apellidoField.value === "") {
    Toastify({
      text: "Por favor, ingresa tu apellido",
      duration: 3000,
      backgroundColor: "linear-gradient(to right, #FFCCCC, #FFCCCC)",
      className: "toastify",
    }).showToast();
  }

  if (!emailRegex.test(emailField.value)) {
    Toastify({
      text: "Por favor, ingresa un correo electrónico válido",
      duration: 3000,
      backgroundColor: "#ed1e1e",
      className: "toastify",
      style: {
        color: "white",
      },
    }).showToast();
  }

  if (
    nombreField.value !== "" &&
    apellidoField.value !== "" &&
    emailRegex.test(emailField.value)
  ) {
    Toastify({
      text: "Formulario enviado con éxito!",
      duration: 3000,
      backgroundColor: "#ffffff ",
      style: {
        border: "1px solid #34c759", // green border color
        color: "#34c759", // green text color
      },
      className: "toastify",
    }).showToast();
    // una vez obtenido los datos, se envian al servidor de una manera por definir en el futuro
    // form.submit();
  }
});
