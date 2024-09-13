import { Request, Response } from 'express';

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

let expenses: Expense[] = [];

export const getExpenses = (req: Request, res: Response): void => {
  res.json(expenses);
};

export const addExpense = (req: Request, res: Response): void => {
  const newExpense: Expense = req.body;
  newExpense.id = expenses.length ? expenses[expenses.length - 1].id + 1 : 1;
  expenses.push(newExpense);
  res.status(201).json(newExpense);
};

export const updateExpense = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updatedExpense: Expense = req.body;
  expenses = expenses.map(exp => (exp.id === Number(id) ? updatedExpense : exp));
  res.json(updatedExpense);
};

export const deleteExpense = (req: Request, res: Response): void => {
  const { id } = req.params;
  expenses = expenses.filter(exp => exp.id !== Number(id));
  res.status(204).send();
};
