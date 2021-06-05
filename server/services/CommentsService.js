import { dbContext } from '../db/DbContext'

class CommentsService {
  async create(commentData) {
    return await dbContext.Comments.create(commentData)
  }

  async vote(commentId, voteData) {
    const comment = await dbContext.Comments.findById(commentId)
    voteData.likes.toString() == 'like' ? comment.likes++ : comment.dislikes++
    await dbContext.Comments.findByIdAndUpdate(commentId, comment)
    return comment
  }

  async delete(commentId, userId) {
    return await dbContext.Comments.findOneAndDelete({ _id: commentId, creatorId: userId })
  }
}

export const commentsService = new CommentsService()
