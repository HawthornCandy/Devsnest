var frame = document.querySelector(".frame");

for (i = 0; i < 1000; i++) {
    frame.innerHTML += "<div class='box'></div>";
}

const box = document.querySelectorAll(".box");

box.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('changeColor')) {
            element.classList.remove('changeColor');
        }
        else {
            element.classList.add('changeColor');
        }
    })
});
