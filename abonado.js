let codigoGenerado = "";
let emailActual = "";
let carnetID = 1000 + Math.floor(Math.random() * 9000);

function enviarCodigo() {
  const email = document.getElementById("email").value;
  if (!email) return alert("Introduce un correo válido");

  const nombre = email.split("@")[0];
  const mensaje = "Solicitud de alta como abonado";
  const fecha = new Date().toLocaleString();

  codigoGenerado = Math.floor(100000 + Math.random() * 900000).toString();
  emailActual = email;

  emailjs.send("service_k4dz5ng", "template_1cyq8jb", {
    to_email: email,
    name: nombre,
    message: mensaje,
    time: fecha,
    codigo: codigoGenerado
  })
  .then(() => {
    alert("Código enviado a tu correo");
    document.getElementById("verificacion").style.display = "block";
  })
  .catch((error) => {
    console.error("Error al enviar:", error);
    alert("Error al enviar el código:\n" + JSON.stringify(error));
  });
}

function verificarCodigo() {
  const inputCodigo = document.getElementById("codigo").value;
  if (inputCodigo === codigoGenerado) {
    generarCarnet();
  } else {
    alert("Código incorrecto");
  }
}

function generarCarnet() {
  document.getElementById("verificacion").style.display = "none";
  const carnetDiv = document.getElementById("carnet");
  carnetDiv.innerHTML = `
    <h3>🎫 Carnet de Aficionado</h3>
    <p><strong>Email:</strong> ${emailActual}</p>
    <p><strong>Nº de abonado:</strong> ${carnetID}</p>
  `;
  carnetDiv.style.display = "block";
}
