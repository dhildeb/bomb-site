import { ProxyState } from '../AppState.js'
import { bombsService } from '../Services/BombsService.js'
import { logger } from '../Utils/Logger.js'

function _draw() {
  logger.log('Drawing bombs')
}
export class BombsController {
  constructor() {
    ProxyState.on('bombs', _draw)

    // eslint-disable-next-line no-self-assign
    ProxyState.bombs = ProxyState.bombs
  }

  drawPost(bombId) {
    logger.log('controller connected')
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

  toggleForm() {
    document.getElementById('bomb-form').classList.toggle('d-none')
  }
}
