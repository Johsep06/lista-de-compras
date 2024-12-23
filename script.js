const qtdIn = document.getElementById('qtd')
const nameIn = document.getElementById('name')
const main = document.getElementById('list')


var itens = []

function appendLine() {
    // Encontra a div pai pelo ID
    pos = itens.length + 1
    // Cria a nova div
    const newDiv = document.createElement("div");
    newDiv.id = `row-${pos}`; // Define o ID da nova div
    newDiv.className = `row back-bl`;

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'check';
    check.id = `check-${pos}`;

    const button = document.createElement('button');
    button.className = 'del back-bd';
    button.id = `del-${pos}`; // Ajuste o ID conforme necessário
    button.textContent = '-';

    button.addEventListener('click', () => {
        main.removeChild(newDiv); // Remove a div pai ao botão
    });

    check.addEventListener('click', () => {
        if (check.checked) {
            newDiv.classList = 'row back-bd'
            newDiv.style.color = 'black'
        } else {
            newDiv.classList = 'row back-bl'
            newDiv.style.color = ''
        }
    })

    const text = document.createTextNode(`${qtdIn.value} ${nameIn.value}`); // Opcional, adiciona texto
    newDiv.appendChild(check)
    newDiv.appendChild(text)
    newDiv.appendChild(button)
    itens.push({'name':nameIn.value, 'qtd':qtdIn.value})

    // Adiciona a nova div à div pai
    main.appendChild(newDiv);
}
