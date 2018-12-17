document.addEventListener("DOMContentLoaded", init);

function init() {
    let text = ["Качественный инвентарь", "Приятный дизайн", "рядом c метро", "Просторное помещение", "опытные инструтора", "Результат и комфорт"];
    let textDesc = ["для ваших рук!", "для ваших глаз!", "для ваших ног!", "для ваших занятий!", "к вашим услугам!", " для вашего тела!"];
    let counter = 0;
    const slideTitle = document.querySelector('#slideTitle');
    const slideTitleDesc = document.querySelector('#slideTitleDesc');

    document.querySelector('#faHeart').addEventListener('click', heart);
    document.querySelector('#faHeart2').addEventListener('click', heart);
    document.querySelector('#faHeart3').addEventListener('click', heart);


    setInterval(change, 5000);

    function change() {
        slideTitle.innerText = text[counter];
        slideTitleDesc.innerText = textDesc[counter];
        counter++;
        if (counter >= text.length) {
            counter = 0;
        }
    }

    function heart() {
    	this.classList.toggle('red');
    }
}

