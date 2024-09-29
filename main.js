const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
	h1.innerHTML = 'Hello to you as well!';
});
