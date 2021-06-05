import { ProxyState } from '../AppState.js'
import { baseURL } from '../env.js'
import { Bomb } from '../Models/Bomb.js'
import { Comment } from "../Models/Comment.js"
import { api } from "./AxiosService.js"

const url = baseURL
class BombsService {
  async addBomb(formData) {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    //console.log("bombs service")
    const res = await api.post(url + '/api/bombs', formData)
    const newBomb = new Bomb(res.data)
    ProxyState.bombs = [newBomb, ...ProxyState.bombs]
  }

  async getBombs() {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    //console.log("getting bomb")
    const res = await axios.get(url + '/api/bombs')
    ProxyState.bombs = res.data.map(b => new Bomb(b))
  }


  async getOneBomb(Id) {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    console.log("getting bomb")
    const res = await api.get(url + '/api/bombs/' + Id)
    console.log("getting bomb: ", res.data)
    //ProxyState.bombs = res.data.map(b => new Bomb(b))
  }

  async getBombComments(bombId) {
    let res = await api.get('/api/bombs/' + bombId + '/comments')
    ProxyState.comments = res.data.map(c => new Comment(c))
  }

}

export const bombsService = new BombsService()
