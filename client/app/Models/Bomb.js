export class Bomb {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.post = data.post
    this.img = data.img
    this.likes = data.likes || 0
    this.dislikes = data.dislikes || 0
    this.creatorId = data.creatorId
  }

  get Thumbail() {
    return /* html */ `

    <div class="card col-4">
          <div class="text-center">
            <h3 class="bomb-title">${this.title}</h3>
          </div>
          <card-body class="m-auto">
            <img src="assets/img/bomb.png" alt="bomb" height="200" width="200" onclick="app.bombsController.drawPost('${this.id}')">
          </card-body>
      </div>
    `
  }

  get Template() {
    return /* html */`
    <div class="card col-4">
        <div class="card-header text-center">
            <span class="bomb-title">${this.title}</span>
        </div>
        <card-body class="m-auto text-center">
            <p>${this.post}</p>

            <form onsubmit="app.commentsController.addComment(event, '${this.id}')">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="comment" aria-label="comments" aria-describedby="button-addon2" id="comment">
                <button class="btn btn-outline-secondary" type="submit">add</button>
              </div>
            </form>
            <div id="comments"></div>
        </card-body>
    </div>
    `
  }
}
