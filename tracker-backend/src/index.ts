import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import expenseRoutes from './routes/expenseRouter';
import incomeRoutes from './routes/incomeRouter';

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/expenses', expenseRoutes);
app.use('/api/incomes', incomeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
