const btnYes = document.getElementById("yes"),
  btnNo = document.getElementById("no"),
  form = document.getElementById("form"),
  menor = document.getElementById("menor");
Question = document.getElementById("question");
Enviar = document.getElementById("enviar");


btnYes.addEventListener("click", () => {
  form.style.display = "flex";
  menor.style.display = "none";
  btnYes.style.display = "none";
  btnNo.style.display = "none";
  Question.style.display = "none";
});

btnNo.addEventListener("click", () => {
  form.style.display = "none";
  menor.style.display = "block";
  btnYes.style.display = "none";
  btnNo.style.display = "none";
  Question.style.display = "none";
});

function captura() {
  var Nomb = document.getElementById("nombre").value;
  var Appe = document.getElementById("apellido").value;
  var Cel = document.getElementById("telefono").value;
  var Exp = document.getElementById("experiencia").value;
  var Tex= document.getElementById("text").value;

  var texto= Nomb+" " + Appe+ " " + Cel+" " + Exp+" " + Tex;
  alert(texto);
  }

Enviar.addEventListener("click", captura);
