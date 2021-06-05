import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BombsService {
  async getAll(query = {}) {
    return await dbContext.Bombs.find(query)
  }

  async getOne(bombId) {
    const bomb = await dbContext.Bombs.findById(bombId)
    if (!bomb) {
      throw new BadRequest('Invalid Id')
    }
    return bomb
  }

  async getBombComments(bombId) {
    return await dbContext.Comments.find({ bombId: bombId })
  }

  async create(bombData) {
    return await dbContext.Bombs.create(bombData)
  }

  async vote(bombId, voteData) {
    const bomb = await dbContext.Bombs.findById(bombId)
    voteData.likes.toString() === 'like' ? bomb.likes++ : bomb.dislikes++
    await dbContext.Bombs.findByIdAndUpdate(bombId, bomb)
    return bomb
  }

  async delete(bombId, userId) {
    return await dbContext.Bombs.findOneAndDelete({ _id: bombId, creatorId: userId })
  }
}
export const bombsService = new BombsService()
