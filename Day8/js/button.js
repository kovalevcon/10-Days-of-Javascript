let button = document.createElement('button');
button.id = 'btn';
button.innerHTML = '0';
document.body.appendChild(button);

button.onclick = () => button.innerText++;