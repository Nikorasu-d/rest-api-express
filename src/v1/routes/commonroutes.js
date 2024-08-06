import { Router } from 'express';
import { getAllUsers, postUser, putUser, deleteUser} from '../../controllers/usersController.js';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();


routes.get('/users/all',getAllUsers)
routes.post('/users/',postUser)
routes.put('/users/:id',putUser)
routes.delete('/users/:id',deleteUser)

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default routes

