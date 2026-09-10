import { Router } from 'express';
import { register, login } from '../controllers/authcontrollers';
import { getTodos, createTodo } from '../controllers/todoController';
import { validateRegister, validateLogin, validateTodo } from '../middlewares/validator';
import { verifyToken } from '../middlewares/authMiddlewares';

const router = Router();

// AUTHENTICATION ROUTES
router.post('/auth/register', validateRegister, register);
router.post('/auth/login', validateLogin, login);

// TODO ROUTES (Protected)
router.get('/todos', verifyToken, getTodos);
router.post('/todos', verifyToken, validateTodo, createTodo);

export default router;