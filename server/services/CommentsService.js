import { dbContext } from '../db/DbContext'

class CommentsService {
  async getAll(query = {}) {
    return await dbContext.Comments.find(query)
  }

  async create(commentData) {
    return await dbContext.Comments.create(commentData)
  }

  async vote(commentId, voteData) {
    const comment = await dbContext.comments.findById(commentId)
    voteData.toString() === 'like' ? comment.likes++ : comment.dislikes++
    return comment
  }

  async delete(commentId, userId) {
    return await dbContext.Comments.findOneAndDelete({ _id: commentId, creatorId: userId })
  }
}

export const commentsService = new CommentsService()
