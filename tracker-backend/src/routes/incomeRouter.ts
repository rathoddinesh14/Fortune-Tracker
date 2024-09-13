import { Router } from 'express';
import { addIncome, deleteIncome, getIncomes, updateIncome } from '../controller/incomeController';

const router = Router();

router.get('/', getIncomes);
router.post('/', addIncome);
router.put('/:id', updateIncome);
router.delete('/:id', deleteIncome);

export default router;
