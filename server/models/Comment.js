import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CommentSchema = new Schema(
  {
    comment: { type: String, required: true },
    bombId: { type: Schema.Types.ObjectId, ref: 'Bomb', required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  }
)
