import React from 'react';
import './Tracker.css';

const Tracker: React.FC = () => {
    // add income function
    const addIncome = (): void => {
        console.log("add income");
    };
    // add expense function
    const addExpense = (): void => {
        console.log("add expense");
    };
    const clearAll = (): void => {
        console.log("clear all");
    };

    return (
        <div>
            <div className="container">
                <h1>Fortune Tracker</h1>
                <div className="section">
                    <h2>Income</h2>
                    <div className="input-group">
                        <label htmlFor="income-description">Description</label>
                        <input type="text" id="income-description" placeholder="e.g. Salary" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="income-amount">Amount (₦)</label>
                        <input type="number" id="income-amount" placeholder="e.g. 100000" />
                    </div>
                    <div className="button-group">
                        <button onClick={() => addIncome()}>Add Income</button>
                    </div>
                </div>
                <div className="section">
                    <h2>Expenses</h2>
                    <div className="input-group">
                        <label htmlFor="expense-description">Description</label>
                        <input type="text" id="expense-description" placeholder="e.g. Rent" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="expense-category">Category</label>
                        <select id="expense-category">
                            <option value="Housing">Housing</option>
                            <option value="Food">Food</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="expense-amount">Amount (₦)</label>
                        <input type="number" id="expense-amount" placeholder="e.g. 50000" />
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
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="transaction-history">
                        </tbody>
                    </table>
                </div>
                <div className="summary">
                    <h2>Budget Summary</h2>
                    <p>Total Income: ₦<span id="total-income">0</span></p>
                    <p>Total Expenses: ₦<span id="total-expenses">0</span></p>
                    <p>Balance: ₦<span id="balance">0</span></p>
                </div>
                <div className="clear-button-group">
                    <button onClick={() => clearAll()}>Clear All</button>
                </div>
            </div>
        </div>
    );
}

export default Tracker;