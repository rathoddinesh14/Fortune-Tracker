import { Router } from 'express';
import { addExpense, deleteExpense, getExpenses, updateExpense } from '../controller/expenseController';

const router = Router();

router.get('/', getExpenses);
router.post('/', addExpense);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

export default router;
