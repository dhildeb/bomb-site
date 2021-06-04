import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const BombSchema = new Schema(
  {
    title: { type: String, required: true },
    post: { type: String, required: true },
    img: { type: URL },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
