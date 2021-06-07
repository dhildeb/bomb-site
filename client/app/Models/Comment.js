export class Comment {
  constructor(data) {
    this.comment = data.comment
    this.bombId = data.bombId
    this.likes = data.likes
    this.dislikes = data.dislikes
    this.userId = data.userId
    this.id = data.id
  }

  get Template() {
    return `
    <div class="d-flex justify-content-between">
    <span>
    <i class="fas fa-user-secret"></i>
    <span>${this.comment}</span>
    </span>
        <span>
          <span onclick="app.commentsController.vote('${this.bombId},like')"><i class="fas fa-long-arrow-alt-up">${this.likes}</i></span>
          <span onclick="app.commentsController.vote('${this.bombId},dislike')"><i class="fas fa-long-arrow-alt-down">${this.dislikes}</i></span>
        </span>
    </div>
    `
  }
}