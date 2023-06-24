// Código JavaScript para abrir uma nova janela com campos de formulário para o Fale Conosco
document.addEventListener("DOMContentLoaded", function() {
    var faleConoscoLink = document.querySelector("a[href='faleconosco.html']");
    faleConoscoLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.open("faleconosco.html", "_blank", "width=400,height=300");
    });
  });
  