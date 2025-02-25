function createChessboard() {
    const wrapper = document.getElementById("wrapper");
    const size = 8; // 8x8 chessboard

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const square = document.createElement("div");
            square.className = "square";

            // Alternate colors based on row and column
            if ((row + col) % 2 === 0) {
                square.classList.add("white");
            } else {
                square.classList.add("black");
            }

            wrapper.appendChild(square);
        }
    }
}

createChessboard();