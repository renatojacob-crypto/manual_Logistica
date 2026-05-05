const manuals = [
    { id: 1, name: "Carregamento por Silo", image: "assets/images/09-01-carregamentosilo.png", pdfs: ["assets/pdfs/09-01-carregamentoporsilo.pdf"] },
    { id: 2, name: "Trem de Carga", image: "assets/images/09-02-01-tremcarga.png", pdfs: ["assets/pdfs/09-02-01-tremdecarga.pdf"] },
    { id: 3, name: "Paleteiras Elétricas", image: "assets/images/09-03-paleteiras.png", pdfs: ["assets/pdfs/09-03-paleteiras.pdf"] },
    { id: 4, name: "Ponte Rolante", image: "assets/images/09-04-ponterolante.png", pdfs: ["assets/pdfs/09-04-ponterolante.pdf"] },
    { id: 5, name: "Máquina de Solda", image: "assets/images/09-05-solda.png", pdfs: ["assets/pdfs/09-05-solda.pdf"] },
    { id: 6, name: "Máquina Niveladora/Socadora", image: "assets/images/09-06-niveladora.png", pdfs: ["assets/pdfs/09-06-niveladora.pdf"] },
    { id: 7, name: "Virador de Vagões", image: "assets/images/09-07-virador.png", pdfs: ["assets/pdfs/09-07-viradordevagoes.pdf"] },
    { id: 8, name: "Trem de Passageiros", image: "assets/images/09-08-trempassageiros.png", pdfs: ["assets/pdfs/09-08-tremdepassageiros.pdf"] },
    { id: 9, name: "Sistema de Tratamento Água/Óleo", image: "assets/images/09-09-sao.png", pdfs: ["assets/pdfs/09-09-estacaodetratamento.pdf"] },
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('manuals-grid');
    grid.innerHTML = '';

    manuals.forEach(manual => {
        const card = document.createElement('a');
        card.href = `viewer.html?id=${manual.id}`;
        card.className = 'manual-card';

        card.innerHTML = `
            <div class="image-container">
                <img src="${manual.image}" alt="${manual.name}">
            </div>
            <div class="card-content">
                <h3>${manual.name}</h3>
            </div>
        `;

        grid.appendChild(card);
    });
});