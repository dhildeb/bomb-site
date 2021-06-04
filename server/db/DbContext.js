import mongoose from 'mongoose'
import { BombSchema } from '../models/Bomb'
import { AccountSchema } from '../models/Account'
import { CommentSchema } from '../models/Comment'

class DbContext {
  Account = mongoose.model('Account', AccountSchema)
  Bombs = mongoose.model('Bomb', BombSchema)
  Comments = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
