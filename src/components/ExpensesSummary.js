import React from "react";
import { connect } from 'react-redux';
import getVisibleExpense from "../selectors/getVisibleExpenses";
import selectExpensesTotal from "../selectors/expenses-total"

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h1> Viewing {expenseCount} {expenseWord} totalling ₹{parseFloat(expensesTotal / 100)} </h1>
        </div>
    )
}

function mapStateToProps(state){
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)