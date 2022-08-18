import React from "react";
import { Link } from 'react-router-dom';

function ExpenseListItem(props){
    return (
        <div>
            <Link to={`edit/${props.id}`}>
                <h3>{props.description}</h3>
            </Link>
            <p>
            ₹
            {parseInt(props.amount) / 100} 
             - 
            {new Date(props.createdAt).toLocaleDateString('en-GB', {  year:"numeric", month:"long", day:"numeric"}) }
            </p>
        </div>
    )
}

export default ExpenseListItem;