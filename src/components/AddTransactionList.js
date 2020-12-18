import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransactionList = () => {

    const {addTransaction} = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const submission = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text: text,
            amount: parseInt(amount),
        }
        addTransaction(newTransaction);
        e.target.reset();
    }

    return (
        <React.Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={submission}>
                <div className="form-control">
                    <label>Text</label>
                    <input
                        type="text"
                        placeholder="Enter text....."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </React.Fragment>
    )
}
