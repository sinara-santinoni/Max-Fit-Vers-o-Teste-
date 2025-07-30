// Captura o formulário da etapa inicial
const form1 = document.getElementById("form1");

form1.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  const tipo = document.querySelector('input[name="userType"]:checked').value;

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  // Armazena os dados no localStorage
  localStorage.setItem("cadastro_nome", nome);
  localStorage.setItem("cadastro_email", email);
  localStorage.setItem("cadastro_senha", senha);
  localStorage.setItem("cadastro_tipo", tipo);

  // Redireciona com base na escolha
  if (tipo === "aluno") {
    window.location.href = "../login/cadastroAluno.html"; // caminho correto com base na sua estrutura
  } else {
    window.location.href = "09-cadastroPersonal.html"; // caminho correto dentro da pasta /publico
  }
});

// Interatividade visual entre as opções (Aluno e Personal)
const userOptions = document.querySelectorAll(".user-type-option");

userOptions.forEach(option => {
  option.addEventListener("click", () => {
    userOptions.forEach(opt => opt.classList.remove("selected"));
    option.classList.add("selected");
    option.querySelector('input').checked = true;
  });
});
