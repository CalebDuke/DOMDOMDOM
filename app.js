document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');

    button.appendChild(btnText);
    document.body.appendChild(button);
    
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    containerDiv.style.border = "thick solid #0000FF";
    document.body.appendChild(containerDiv);
    
    
    button.addEventListener('click', function () {
        let box = document.createElement('div');
        box.classList.add('square');
        containerDiv.appendChild(box);
    });
});
