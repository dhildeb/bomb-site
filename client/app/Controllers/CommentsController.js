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
    window.event.preventDefault()
    try {
      let form = window.event.target
      let commentData = {
        comment: form.comment.value
      }
      console.log(form)
      await commentsService.addComment(commentData, bombId)
    } catch (error) {
      console.error(error.message)
    }
    form.reset()
  }
}