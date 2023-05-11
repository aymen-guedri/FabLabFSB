import express from 'express';
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser, getUserCount } from '../controllers/UserController.js';
import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/:id', getUser);
router.get('/', getAllUsers);
router.get('/count', getUserCount); // Add this line
router.put('/:id', authMiddleWare, updateUser);
router.delete('/:id', authMiddleWare, deleteUser);
router.put('/:id/follow', authMiddleWare, followUser);
router.put('/:id/unfollow', authMiddleWare, unfollowUser);

export default router;
