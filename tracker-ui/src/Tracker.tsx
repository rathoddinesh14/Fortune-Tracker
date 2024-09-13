import React from 'react';
import './Tracker.css';

const Tracker: React.FC = () => {
    // income
    const [income, setIncome] = React.useState<any[]>([]);
    const [incomeDescription, setIncomeDescription] = React.useState<string>("");
    const [incomeAmount, setIncomeAmount] = React.useState<number>(0);
    const [totalIncome, setTotalIncome] = React.useState<number>(0);
    // expense
    const [expenseDescription, setExpenseDescription] = React.useState<string>("");
    const [expenseCategory, setExpenseCategory] = React.useState<string>("Housing");
    const [expenseAmount, setExpenseAmount] = React.useState<number>(0);
    const [totalExpense, setTotalExpense] = React.useState<number>(0);
    // transaction history
    const [transactionHistory, setTransactionHistory] = React.useState<any[]>([]);


    // add income function
    const addIncome = (): void => {
        setIncome([...income, {
            description: incomeDescription,
            amount: incomeAmount,
        }]);
        setIncomeAmount(0);
        setIncomeDescription("");
        setTotalIncome(totalIncome + incomeAmount);
    };
    // add expense function
    const addExpense = (): void => {
        setTransactionHistory([...transactionHistory, {
            description: expenseDescription,
            category: expenseCategory,
            amount: expenseAmount
        }]);
        setTotalExpense(totalExpense + expenseAmount);
        setExpenseAmount(0);
        setExpenseDescription("");
        setExpenseCategory("Housing");
    };
    const clearAll = (): void => {
        setIncome([]);
        setTransactionHistory([]);
        setTotalIncome(0);
        setTotalExpense(0);
    };

    return (
        <div>
            <div className="container">
                <h1>Fortune Tracker</h1>
                <div className="section">
                    <h2>Income</h2>
                    <div className="input-group">
                        <label htmlFor="income-description">Description</label>
                        <input type="text" id="income-description" placeholder="e.g. Salary" 
                            value={incomeDescription} onChange={(e) => setIncomeDescription(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="income-amount">Amount (₦)</label>
                        <input type="number" id="income-amount" placeholder="e.g. 100000" value={incomeAmount}
                            onChange={(e) => setIncomeAmount(parseInt(e.target.value))} />
                    </div>
                    <div className="button-group">
                        <button onClick={() => addIncome()}>Add Income</button>
                    </div>
                </div>
                <div className="section">
                    <h2>Expenses</h2>
                    <div className="input-group">
                        <label htmlFor="expense-description">Description</label>
                        <input type="text" id="expense-description" placeholder="e.g. Rent" value={expenseDescription}
                            onChange={(e) => setExpenseDescription(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="expense-category">Category</label>
                        <select id="expense-category" value={expenseCategory}
                            onChange={(e) => setExpenseCategory(e.target.value)} >
                            <option value="Housing">Housing</option>
                            <option value="Food">Food</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="expense-amount">Amount (₦)</label>
                        <input type="number" id="expense-amount" placeholder="e.g. 50000" value={expenseAmount}
                            onChange={(e) => setExpenseAmount(parseInt(e.target.value))} />
                    </div>
                    <div className="button-group">
                        <button onClick={() => addExpense()}>Add Expense</button>
                    </div>
                </div>
                <div className="table-container">
                    <h2>Transaction History</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Amount (₦)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="transaction-history">
                            {transactionHistory.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.description}</td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.amount}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="summary">
                    <h2>Budget Summary</h2>
                    <p>Total Income: ₦<span id="total-income">{totalIncome}</span></p>
                    <p>Total Expenses: ₦<span id="total-expenses">{totalExpense}</span></p>
                    <p>Balance: ₦<span id="balance">{totalIncome-totalExpense}</span></p>
                </div>
                <div className="clear-button-group">
                    <button onClick={() => clearAll()}>Clear All</button>
                </div>
            </div>
        </div>
    );
}

export default Tracker;