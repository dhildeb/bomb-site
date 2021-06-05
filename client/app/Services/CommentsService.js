import { baseURL } from "../env.js"
import { api } from "./AxiosService.js"

class CommentsService {
  async vote(bombId, voteData) {
    let res = await api.put(baseURL + 'api/bombs/' + bombId, voteData)
    console.log(res.data)
  }

  async addComment(commentData, bombId) {
    let res = await api.post(baseURL + 'api/comments', commentData)
    console.log(res.data)
  }
}

export const commentsService = new CommentsService()