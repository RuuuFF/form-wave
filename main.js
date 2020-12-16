const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay: ${index * 40}ms">${letter}</span>`)
    .join('');
  
    /* da o foco no input caso clique em cima do label */
    label.addEventListener('click', () => {
      label.previousElementSibling.focus();
    });
});

// innerHTML, innerText: https://cutt.ly/ZhJPk4c
// Split: https://www.w3schools.com/jsref/jsref_split.asp
// Map: https://www.w3schools.com/jsref/jsref_map.asp
// Join: https://www.w3schools.com/jsref/jsref_join.asp