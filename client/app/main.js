import { AuthController } from './Controllers/AuthController.js'
import { BombsController } from './Controllers/BombsController.js'
import { CommentsController } from "./Controllers/CommentsController.js";
// import { SocketTestController } from './Controllers/SocketTestController.js'
import { ValuesController } from './Controllers/ValuesController.js'

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  // socketTestController = new SocketTestController();
  commentsController = new CommentsController()
  bombsController = new BombsController()
}

// @ts-ignore
window.app = new App()
