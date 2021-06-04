import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class BombsController extends BaseController {
  constructor() {
    super('api/bombs')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.vote)
  }

  async getAll(req, res, next) {
    try {
      const bombs = await bombsService.getAll(req.query)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const bomb = await bombsService.getOne(req.params.id)
      return res.send(bomb)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      res.send(req.body)
    } catch (error) {
      next(error)
    }
  }
}
