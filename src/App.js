import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpences } from './components/IncomeExpences'
import { TransationList } from './components/TransationList';
import { AddTransactionList } from './components/AddTransactionList';
import {GlobalProvider} from './context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransationList />
        <AddTransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
