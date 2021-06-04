import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { bombsService } from '../services/BombsService'

export class BombsController extends BaseController {
  constructor() {
    super('api/bombs')
    this.router
      .get('', this.getAll)
      .get('/:bombId', this.getOne)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:bombId', this.vote)
      .delete('/:bombId', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const bombs = await bombsService.getAll(req.query)
      return res.send(bombs)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const bomb = await bombsService.getOne(req.params.bombId)
      return res.send(bomb)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bomb = await bombsService.create(req.body)
      return res.send(bomb)
    } catch (error) {
      next(error)
    }
  }

  async vote(req, res, next) {
    try {
      const vote = await bombsService.vote(req.params.bombId, req.body)
      return res.send(vote)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const bomb = await bombsService.delete(req.params.bombId, req.userInfo.id)
      return res.send(bomb)
    } catch (error) {
      next(error)
    }
  }
}
