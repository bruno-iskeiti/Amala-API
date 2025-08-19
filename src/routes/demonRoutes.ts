import { Router } from "express";
import { getAllDemon , getDemonById, createDemon } from '../controllers/demonController';

const router = Router();

router.get('/', getAllDemon)
router.get('/:id', getDemonById)
router.post('/', createDemon)

export default router