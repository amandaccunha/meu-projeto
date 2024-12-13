// Adiciona o evento de clique nos botões "Comprar"
document.querySelectorAll(".produto button").forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.disabled) {
        button.textContent = "Adicionado";
        button.disabled = true;
        button.classList.add("btn-secondary");
        button.classList.remove("btn-success");
        console.log("Produto adicionado ao carrinho!");
      }
    });
  });