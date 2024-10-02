// elementos DOM selecionados
const form = document.querySelector("#formulario");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputMensagem = document.querySelector("#mensagem");
const botaoEnviar = document.getElementById("submit");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir o comportamento padrão de envio do formulário

  // caso os inputs não sejam preenchidos, exibir um alerta
  if (inputNome.value === "") {
    alert("Por favor, preencha seu nome");
    return;
  }

  if (inputEmail.value === "") {
    alert("Por favor, preencha seu e-mail");
    return;
  }

  if (inputMensagem.value === "") {
    alert("Por favor, escreva sua mensagem");
    return;
  }

  botaoEnviar.textContent = "Enviado";

  form.reset();
});
