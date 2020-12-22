import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransationList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <React.Fragment>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(
                    transaction => (<Transaction key={transaction.id} transaction={transaction} />)
                )}
            </ul>
        </React.Fragment>
    )
}
