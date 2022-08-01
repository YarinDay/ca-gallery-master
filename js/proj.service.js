'use strict'

var gProjs = _createProjs()

function _createProjs() {

    return [_createProj("portfolioModal1", "Threads", "Illustration", "asd", "#portfolioModal1", "1448693940000", ["Clothes", "Brand"], "img/portfolio/01-thumbnail.jpg", "img/portfolio/01-full.jpg"),
    _createProj("portfolioModal2", "Explore", "Graphic Design", "assd", "#portfolioModal2", "1448693940000", ["Mountains", "View"], "img/portfolio/02-thumbnail.jpg", "img/portfolio/02-full.jpg"),
    _createProj("portfolioModal3", "Finish", "Identity", "asd", "#portfolioModal3", "1448693940000", ["Board", "Shooes"], "img/portfolio/03-thumbnail.jpg", "img/portfolio/03-full.jpg"),
    _createProj("portfolioModal4", "Lines", "Branding", "asd", "#portfolioModal4", "1448693940000", ["Computer", "Tech"], "img/portfolio/04-thumbnail.jpg", "img/portfolio/04-full.jpg"),
    _createProj("portfolioModal5", "Southwest", "Website Design", "asd", "#portfolioModal5", "1448693940000", ["Office", "Glasses"], "img/portfolio/05-thumbnail.jpg", "img/portfolio/05-full.jpg"),
    _createProj("portfolioModal6", "Window", "Photography", "asd", "#portfolioModal6", "1448693940000", ["PhonePicture", " Arc de Triomphe"], "img/portfolio/06-thumbnail.jpg", "img/portfolio/06-full.jpg")]
}

function _createProj(id, name, title, desc, url, publishedAt, labels, image, modalImage) {

    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels,
        image,
        modalImage
    }

}


function getProjs() {
    return gProjs
}