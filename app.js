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

        let colorArray = ['green', 'yellow', 'blue', 'red', 'orange', 'pink', 'brown', 'purple']
        function generateRandomColor() {
            return Math.floor((Math.random() * 8));
        }

        box.addEventListener('click', function () {
            box.style.backgroundColor = colorArray[generateRandomColor()];
        });

        box.addEventListener('dblclick', function () {
            if (box.id % 2 === 0) {
                if (document.body.contains(box.nextSibling)) {
                    box.nextSibling.remove()
                } else {
                    alert("aint no box")
                }
            } else {
                if (document.body.contains(box.previousSibling)) {
                    box.previousSibling.remove()
                } else {
                    alert("aint no box")
                }
            }
        })

    });





});
