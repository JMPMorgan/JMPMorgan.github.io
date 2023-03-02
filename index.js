window.onload = () => {
  const form = document.querySelector("#form-contact");
  const btnSend = document.querySelector("#send-form");
  btnSend.addEventListener("click", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const fullName = formData.get("name");
    const email = formData.get("mail");
    const phoneNumber = formData.get("number");
    if (
      !onlyLetters(fullName) ||
      !validateEmail(email) ||
      !isValidPhoneNumber(phoneNumber)
    ) {
      Swal.fire({
        icon: "error",
        title: "Error en algun campo requerido",
        text: "Por favor verificar que todos los campos verificados esten llenos de forma correcta.",
      });
    }

    await Swal.fire({
      title: "Estamos Enviando su Correo Electronico, Por favor Espere :D",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    await Swal.fire({
      icon: "success",
      title: "Envio Correctamente",
      text: "Su Correo Electronico se envio correctamente, nos pondremos en contacto a la brevedad.",
    });
    btnSend.submit();
  });
};

function onlyLetters(text) {
  //Pregunta si son letras de la a-z y A-Z y si cuenta con espacios
  //si cumple las condiciones regresa true, pero en esta funcion regresa el opuesto
  //por cuestion de funcionalidad
  let regex = /^[a-zA-Z ]+$/;
  return regex.test(text);
}

function validateEmail(email) {
  /*
    /*
    validad el email para que haya texto despues un arroba y un punto
    */
  let regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

function isValidPhoneNumber(number) {
  const regexNumber = /^[0-9]+$/;
  const length = number.length;
  if (length === 10 && regexNumber.test(number)) {
    return true;
  }
  return false;
  //   return regexNumber.test(number);
}
