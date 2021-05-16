import React, { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/new_expenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 69,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Vu Television",
    amount: 14999,
    date: new Date(2021, 3, 4),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 3663,
    date: new Date(2020, 10, 18),
  },
  {
    id: "e4",
    title: "Sneakers",
    amount: 6999,
    date: new Date(2020, 0, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
