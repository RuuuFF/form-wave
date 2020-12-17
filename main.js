const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay:${index * 40}ms">${letter}</span>`)
    .join('');
  
    /* da o foco no input caso clique em cima do label */
    label.addEventListener('click', () => {
      label.previousElementSibling.focus();
    });
});


// "innerHTML" retorna o texto, COM formatações e COM elementos html. Permite adicionar tags.
// "innerText" retorna somente o texto, sem formatações ou elementos html. Não permite adicionar tags.
// Mais sobre: https://cutt.ly/ZhJPk4c


// "split()" divide uma string em uma série de substrings.
// Se uma string vazia ("") for usada como separador, a string será dividida entre cada caractere.
// Mais sobre: https://www.w3schools.com/jsref/jsref_split.asp


// "map()" cria um novo array com os resultados da chamada de uma função para cada elemento de um array.
// O método chama a função fornecida uma vez para cada elemento em uma matriz, em ordem.
// Mais sobre: https://www.w3schools.com/jsref/jsref_map.asp


// "join()" retorna o array como uma string.
 // Os elementos serão separados por um separador especificado. O separador padrão é a vírgula (,).
// Join: https://www.w3schools.com/jsref/jsref_join.asp