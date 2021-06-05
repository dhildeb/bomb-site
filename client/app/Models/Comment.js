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
    <i></i>
    </div>
    `
  }
}