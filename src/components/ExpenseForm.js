import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export default function(props){
    const [state, setState] = React.useState({
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense ? (props.expense.amount / 100).toString() : '',
        createdAt: props.expense ? new Date(props.expense.createdAt) : new Date(),
        error: ''
    })

    function onDescriptionChange(e){
        setState((prev) => {
            return {
                ...prev,
                description: e.target.value
            }
        })
    }

    function onNoteChange(e){
        setState((prev) => {
            return {
                ...prev,
                note: e.target.value
            }
        })
    }

    function onAmountChange(e){
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/g)){
            setState((prev) => {
                return {
                    ...prev,
                    amount
                }
            })
        }
    }

    function onSubmit(e){
        e.preventDefault();
        if(!state.description || !state.amount || !(state.createdAt)){
            setState((prev) => {
                return {...state, error: 'Please Provide Description and Amount'}
            })
        }else {
            setState((prev) => {
                return {...state, error: ''}
            })
            props.onSubmit({
                description: state.description,
                amount: parseFloat(state.amount, 10) * 100,
                createdAt: Date.parse(state.createdAt),
                note: state.note
            })
            console.log('submitted')
        }
    }

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={state.description}
                    onChange={onDescriptionChange}
                />
                <input 
                    type="text" 
                    placeholder="Amount" 
                    value={state.amount}
                    onChange={onAmountChange}
                />
                <DatePicker
                    selected={state.createdAt}
                    onChange={(date) => {
                        setState((prev) => ({...state, createdAt: date}))
                    }}
                    placeholderText="dd/mm/yyyy"
                    dateFormat={'dd/MM/yyyy'}
                />
                <textarea 
                    name="note"
                    id="note" 
                    placeholder=" Add a note for your expense (optional)"
                    value={state.note}
                    onChange={onNoteChange}
                >
                </textarea>
                <button>Add Expense</button>
            </form>
        </div>
    )
}