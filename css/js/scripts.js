// Adicionar funcionalidade ao botão "Comprar"
const buttons = document.querySelectorAll('.btn-comprar');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Verifica o estado do botão
        if (this.textContent === 'Comprar') {
            // Modifica o botão para "Adicionado"
            this.textContent = 'Adicionado';
            this.style.backgroundColor = '#4CAF50'; // Altera a cor do botão
            this.style.cursor = 'not-allowed'; // Desabilita o botão
            this.disabled = true; // Desabilita o botão
        } else {
            // Volta o botão para "Comprar"
            this.textContent = 'Comprar';
            this.style.backgroundColor = '#FF9800'; // Cor original
            this.style.cursor = 'pointer'; // Habilita o cursor
            this.disabled = false; // Habilita o botão novamente
        }
    });
});
