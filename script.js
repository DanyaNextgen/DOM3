let squares = document.querySelectorAll('.square')

squares.forEach((square) => {
    square.onmouseenter = () => {
        square.classList.add('active')
    }
    square.onclick = () => {
        square.classList.toggle('big-square')
    }
});
