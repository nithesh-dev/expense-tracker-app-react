import React, { useState } from "react";

import Card from "../ui/Card";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <ul>
      <Card className="expenses" value={props.items}>
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={changeYearHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/> 
      </Card>
    </ul>
  );
};

export default Expenses;
