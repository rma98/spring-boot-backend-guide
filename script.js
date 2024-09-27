// Seleciona o botão de menu e a barra lateral
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const menuLinks = document.querySelectorAll('.sidebar ul li a');

// Adiciona o evento de clique para abrir/fechar o menu
menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active'); // Alterna a classe 'active' para abrir/fechar o menu
});

// Adiciona o evento de clique para cada link do menu
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        sidebar.classList.remove('active'); // Fecha o menu quando um link for clicado
    });
});
