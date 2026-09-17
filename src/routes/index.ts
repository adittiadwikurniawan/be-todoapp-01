import { Router } from 'express';
import authRoutes from './authRoutes';
import todoRoutes from './todoRoutes';
import { verifyToken } from '../middlewares/authMiddlewares';

const router = Router();

router.use('/auth', authRoutes);
router.use('/todos', verifyToken, todoRoutes);

export default router;