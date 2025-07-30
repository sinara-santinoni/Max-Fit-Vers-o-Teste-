document.addEventListener("DOMContentLoaded", () => {
  // Recupera os dados salvos no localStorage
  const nome = localStorage.getItem("cadastro_nome");
  const email = localStorage.getItem("cadastro_email");
  const senha = localStorage.getItem("cadastro_senha");

  // Exibe o nome do usuário no topo (opcional)
  const nomeUsuario = document.getElementById("nomeUsuario");
  if (nome && nomeUsuario) {
    nomeUsuario.textContent = `Olá, ${nome}!`;
  }

  // Formulário do Personal
  const form = document.getElementById("personalForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const cref = document.getElementById("cref").value;
    const especialidadesSelecionadas = Array.from(
      document.querySelectorAll('input[name="especialidades"]:checked')
    ).map((checkbox) => checkbox.value);

    if (!cref || especialidadesSelecionadas.length === 0) {
      alert("Preencha o CREF e selecione pelo menos uma especialidade.");
      return;
    }

    // Simulação de envio de dados finais
    const dadosCompletos = {
      nome,
      email,
      senha,
      cref,
      especialidades: especialidadesSelecionadas,
    };

    console.log("Cadastro finalizado:", dadosCompletos);

    // Redireciona para a tela de sucesso (ajuste o caminho se necessário)
    window.location.href = "/publico/10-cadastroSucesso.html";

    // (opcional) limpar localStorage na tela seguinte
    // localStorage.clear();
  });
});
