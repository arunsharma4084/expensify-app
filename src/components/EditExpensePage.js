import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../slices/expensesSlice";

const EditExpensePage = (props) => {
    let params = useParams();
    let navigate = useNavigate();
    let expenseToEdit = props.expenses.find((expense) => (expense.id === params.id));

    return (
        <div>
             <ExpenseForm 
                expense={expenseToEdit}
                onSubmit={(expense) => {
                    const id = expenseToEdit.id
                    props.dispatch(editExpense({id, expense}));
                    navigate('/', {replace: true})
                }}
             />
             <button onClick={() => {
                    props.dispatch(removeExpense({id: expenseToEdit.id}))
                    navigate('/', {replace: true})
                }}
            >
            Remove
            </button>
        </div>
    );
};

function mapStateToProps(state){
    return {
        expenses: state.expenses,
    }
}

export default connect(mapStateToProps)(EditExpensePage);