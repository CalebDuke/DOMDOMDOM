document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');

    button.appendChild(btnText);
    document.body.appendChild(button);

    let containerDiv = document.createElement('div');
    containerDiv.className = 'container';
    containerDiv.style.border = "thick solid #0000FF";
    document.body.appendChild(containerDiv);

    let counter = 0

    button.addEventListener('click', function () {
        console.log(counter);
        let box = document.createElement('div');
        box.className = 'square';
        box.id = counter;
        let idDisplay = document.createElement('span');
        idDisplay.className = 'id-display';
        idDisplay.innerText = counter;
        containerDiv.appendChild(box);
        counter++;

        box.appendChild(idDisplay);
    });
});
