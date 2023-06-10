import express from 'express';
import { addTodo ,getTodo, toggleTodoDone} from '../controller/todo-controller.js';
const route = express.Router();
route.post('/todos',addTodo);
route.get('/todos',getTodo);
route.get('/todos/:id',toggleTodoDone);

export default route;