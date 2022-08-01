'use strict'

var gProjs = _createProjs()

function _createProjs() {

    return [_createProj("portfolioModal1", "Minesweeper", "Game", "This is a Minesweeper game, you need to follow the numbers and dont step on MINES!", "#portfolioModal1", "March 2019", ["Board", " Game"], "img/portfolio/MinesweeperGame.jpg", "img/portfolio/Minesweeper.jpg","https://yarinday.github.io/My-Minesweeper-game/"),
    _createProj("portfolioModal2", "Pacman", "Game", "This is a Pacman game, you need to eat all the food that is on your board, and becareful from the GHOSTS!", "#portfolioModal2", "March 2019", ["Board", " Game"], "img/portfolio/PacmanGame.jpg", "img/portfolio/Pacman.jpg","https://yarinday.github.io/Pacman/"),
    _createProj("portfolioModal3", "Book Shop", "Store", "asd", "#portfolioModal3", "March 2019", ["Books", " Store"], "img/portfolio/BookshopGame.jpg", "img/portfolio/bookshop.jpg", "https://yarinday.github.io/Book-Store/"),
    _createProj("portfolioModal4", "Chess", "Game", "Play Chess! like the way you know :D", "#portfolioModal4", "March 2019", ["Board", " Game"], "img/portfolio/Chess.jpg", "img/portfolio/ChessGame.jpg", "https://yarinday.github.io/Chess/"),
    _createProj("portfolioModal5", "Balloon Pop", "Game", "pop the balloons before they reach to the top of the page!", "#portfolioModal5", "March 2019", ["Board", " Game"], "img/portfolio/balloon pop.jpg", "img/portfolio/balloon popGame.jpg", "https://yarinday.github.io/balloon-pop/"),
    _createProj("portfolioModal6", "Touch Nums", "Game", "choose the number", "#portfolioModal6", "March 2019", ["Board", " Game"], "img/portfolio/touchnums.jpg", "img/portfolio/touchnumsGame.jpg", "https://yarinday.github.io/touch-nums/")]
}

function _createProj(id, name, title, desc, url, publishedAt, labels, image, modalImage, link) {

    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels,
        image,
        modalImage,
        link
    }

}


function getProjs() {
    return gProjs
}