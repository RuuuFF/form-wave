const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition: ${index * 100}ms">${letter}</span>`)
    .join('');
  
    /* da o foco no input caso clique em cima do label */
    label.addEventListener('click', () => {
      label.previousElementSibling.focus();
    });
});