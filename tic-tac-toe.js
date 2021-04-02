window.addEventListener("DOMContentLoaded", (event) => {

 let currentPlayerSympol = "x"

 let squareValues = ["", "", "",
                    "", "", "",
                    "", "", ""]

 let gameBoard = document.querySelector("#tic-tac-toe-board")

 gameBoard.addEventListener("click", (event) => {
    let [firstPart, id] = event.target.id.split("-")
    let boardNumber = Number(id)
    if (squareValues[boardNumber] !== "") {
        return
    }
 })

});
