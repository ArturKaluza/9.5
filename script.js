const  buttons = document.getElementsByClassName('button');
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    alert(buttons[i].innerText);
}