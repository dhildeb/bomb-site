import { ProxyState } from '../AppState.js'
import { baseURL } from '../env.js'
import { Bomb } from '../Models/Bomb.js'

const url = baseURL
class BombsService {
  async addBomb(formData) {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    const res = await axios.post(url + '/api/bombs', formData)
    const newBomb = new Bomb(res.data)
    ProxyState.bombs = [newBomb, ...ProxyState.bombs]
  }

  async getBombs() {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    const res = await axios.get(url + '/api/bombs')
    ProxyState.bombs = res.data.map(b => new Bomb(b))
  }
}

export const bombsService = new BombsService()
