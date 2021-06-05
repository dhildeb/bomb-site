import { api } from "./AxiosService"

class CommentsService {
  async vote(bombId, voteData) {
    let res = await api.put(url + 'api/bombs/' + bombId, voteData)
    console.log(res.data)
  }
}