import { ProxyState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"

function _drawComments() {
  let template = ''
  ProxyState.comments.forEach(c => {
    template += c.Template
  })
  document.getElementById('comments').innerHTML = template
}
export class CommentsController {
  constructor() {
    ProxyState.on('comments', _drawComments)
  }
  async vote(bombId, voteData) {
    try {
      await commentsService.vote(bombId, voteData)
    } catch (error) {
      console.error(error.message)
    }
  }

  async addComment(event, bombId) {
    event.preventDefault()
    let form = event.target
    let commentData = {
      comment: form.comment.value,
      bombId: bombId
    }
    console.log(commentData)
    try {
      await commentsService.addComment(commentData)
    } catch (error) {
      console.error(error.message)
    }
    form.reset()
  }
}