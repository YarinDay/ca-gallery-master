'use strict'

console.log('Starting up');

function init() {
    renderprojs()
    renderModal()
}

function renderprojs() {
    const projs = getProjs()
    const strHtmls = projs.map(proj => `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="${proj.url}">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="${proj.image}" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
      <p>${proj.labels}</p>
    </div>
  </div>
        `
    )
    $('.row.container').html(strHtmls)
}

function renderModal() {
    const projs = getProjs()
    const strHtmls = projs.map(proj => `
    <div class="portfolio-modal modal fade" id="${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                
                <img class="img-fluid d-block mx-auto" src="${proj.modalImage}" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <li>${proj.publishedAt}</li>
                  <li>Client: ${proj.name}</li>
                  <li>Category: ${proj.title}</li>
                  <button class="modal-btn"><a href="${proj.link}" target="_blank">Click Me</a></button>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
    )
    $('.single-modal').html(strHtmls)

}

function onClickSubmitContact() {
    const sub = $('.subject').val()
    const email = $('.email').val()
    const msg = $('.message').val()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${sub}&body=${msg}`)
    $('.subject').val('') 
    $('.email').val('') 
    $('.message').val('') 
}