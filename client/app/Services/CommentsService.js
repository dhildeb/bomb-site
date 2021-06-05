import { ProxyState } from "../AppState.js"
import { baseURL } from "../env.js"
import { api } from "./AxiosService.js"
import { Comment } from "../Models/Comment.js"


class CommentsService {
  async vote(bombId, voteData) {
    let res = await api.put('api/bombs/' + bombId, voteData)

  }

  async addComment(commentData) {
    let res = await api.post('api/comments', commentData)

    ProxyState.comments = [...ProxyState.comments, new Comment(res.data)]
  }
}

export const commentsService = new CommentsService()