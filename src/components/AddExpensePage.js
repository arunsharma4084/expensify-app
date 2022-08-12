import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addExpense } from "../slices/expensesSlice";
import ExpenseForm from "./ExpenseForm";

const AddExpensePage = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                    navigate("/", {replace: true})
                }}
            />
        </div>
    )
};

export default connect()(AddExpensePage);