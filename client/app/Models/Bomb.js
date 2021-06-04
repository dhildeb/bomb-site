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
          <div class="card-header text-center">
          <span class="bomb-title">${this.title}</span>
          </div>
          <card-body class="m-auto">
            <img src="assets/img/bomb.png" alt="bomb" height="200" width="200" onclick="app.bombsController.drawPost('${this.id}')">
          </card-body>
        </div>


    `
  }

  get Template() {
    return /* html */ `
      
    `
  }
}
