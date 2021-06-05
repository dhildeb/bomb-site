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
    <div class="d-flex">
      <div>
        <i>idIcon</i>
        <div>
          <span onclick="app.commentsController.vote('${this.bombId},like')">${this.likes}</span>
          <span onclick="app.commentsController.vote('${this.bombId},dislike')">${this.dislikes}</span>
        </div>
      </div>
      <p>${this.comment}</p>
    </div>
    `
  }
}