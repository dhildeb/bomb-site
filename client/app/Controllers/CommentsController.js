import { logger } from "../Utils/Logger.js";

export class CommentsController {
  async vote(bombId, voteData) {
    try {
      await commentsService.vote(bombId, voteData)
    } catch (error) {
      logger.log(error)
    }
  }
}