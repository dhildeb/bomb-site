import { ProxyState } from '../AppState.js'
import { bombsService } from '../Services/BombsService.js'
import { logger } from '../Utils/Logger.js'

function _draw() {
  let template = ''
  ProxyState.bombs.forEach(b => {
    template += b.Thumbail
  })

  document.getElementById('bomb-display').innerHTML = template
}
export class BombsController {
  constructor() {
    ProxyState.on('bombs', _draw)
    bombsService.getBombs()
  }

  drawPost(bombId) {
    this.getBombComments(bombId)
    console.log('controller connected', bombId)
    //let bombDetails = bombsService.getOneBomb(bombId)
    let bombDetails = ProxyState.bombs.find(b => b.id == bombId)
    document.getElementById("bomb-display").innerHTML = bombDetails.Template
  }

  addBomb(event) {
    try {
      event.preventDefault()
      const form = event.target
      const formData = {
        title: form.bombTitle.value,
        post: form.bombPost.value,
        img: form.bombImg.value
      }
      bombsService.addBomb(formData)
    } catch (error) {
      logger.log(error.message)
    }
  }

  async getBombComments(bombId) {
    await bombsService.getBombComments(bombId)
  }

  toggleForm() {
    document.getElementById('bomb-form').classList.toggle('d-none')
  }
}
