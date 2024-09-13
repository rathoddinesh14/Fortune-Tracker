import { Request, Response } from 'express';

interface Income {
  id: number;
  description: string;
  amount: number;
}

let incomes: Income[] = [];

export const getIncomes = (req: Request, res: Response): void => {
  res.json(incomes);
}

// add income
export const addIncome = (req: Request, res: Response): void => {
  const newIncome: Income = req.body;
  newIncome.id = incomes.length + 1;
  incomes.push(newIncome);
  res.status(201).json(newIncome);
};

// update income
export const updateIncome = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updatedIncome: Income = req.body;
  incomes = incomes.map(income => (income.id === Number(id) ? updatedIncome : income));
  res.json(updatedIncome);
};

// delete income
export const deleteIncome = (req: Request, res: Response): void => {
  const { id } = req.params;
  incomes = incomes.filter(income => income.id !== Number(id));
  res.status(204).send();
};