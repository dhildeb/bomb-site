export class CommentsController {
  async vote(bombId, voteData) {
    try {
      await commentsService.vote(bombId, voteData)
    } catch (error) {
      console.log(error)
    }
  }
}