window.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Verificar se todos os campos estão preenchidos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !telefone || !mensagem) {
      // Mostrar mensagem de erro se algum campo estiver vazio
      errorMessage.textContent = 'Por favor, preencha todos os campos.';
      successMessage.style.display = 'none';
    } else {
      // Limpar mensagens de erro e sucesso
      errorMessage.textContent = '';
      successMessage.textContent = '';

      
      
      setTimeout(function() {
        successMessage.textContent = 'Mensagem enviada com sucesso!';
        successMessage.style.display = 'block';
      }, 2000);
    }
  });
});

