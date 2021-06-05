import { api } from "./AxiosService"

class CommentsService {
  async vote(bombId, voteData) {
    let res = await api.put(url + 'api/bombs/' + bombId, voteData)
    let i = ProxyState.cars.indexOf(formData.id)
    ProxyState.cars.splice(i, 1, new Car(res.data))
    ProxyState.cars = ProxyState.cars
  }
}