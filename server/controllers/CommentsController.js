import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentsService } from '../services/CommentsService'

export class CommentsController extends BaseController {
  constructor() {
    super('/api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:commentId', this.vote)
      .delete('/:commentId', this.delete)
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await commentsService.create(req.body)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async vote(req, res, next) {
    try {
      const vote = await commentsService.vote(req.params.commentId, req.body)
      return res.send(vote)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      req.body.creatorId = req.userinfo.id
      const comment = await commentsService.delete(req.params.commentId, req.userinfo.id)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }
}
