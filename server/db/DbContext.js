import mongoose from 'mongoose'
import { BombSchema } from '../models/Bomb'
import { AccountSchema } from '../models/Account'
import { CommentSchema } from '../models/Comment'

class DbContext {
  Comments = mongoose.model('Comment', CommentSchema)
  Account = mongoose.model('Account', AccountSchema)
  Bombs = mongoose.model('Bomb', BombSchema)
}

export const dbContext = new DbContext()
