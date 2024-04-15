function getRandomColor() {
    let val1 = Math.ceil(Math.random()*255);
    let val2 = Math.ceil(Math.random()*255);
    let val3 = Math.ceil(Math.random()*255);

    return `rgb(${val1}, ${val2}, ${val3})`;
}

let container = document.querySelector(".container");

function fill(number) {
    Array.from(container.children).forEach(div=> {
        container.removeChild(div);
    })

    for(let i=1;i<=number;i++)
        for(let j=1;j<=number;j++) {
            let box = document.createElement("div");
            box.setAttribute("class","box");

            let length = Math.floor(1200/number);
            box.style.width = `${length}px`;
            length = Math.floor(550/number);
            box.style.height = `${length}px`;

            container.appendChild(box);

            box.addEventListener("mouseenter", e=> {
                box.style.backgroundColor = getRandomColor();
            })
    }
}

fill(16);

document.querySelector(".btn").addEventListener("click", e=> {
    let numberOfSquares = prompt("Enter number of squares in a row.");

    fill(numberOfSquares);
})
