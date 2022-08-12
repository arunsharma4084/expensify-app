import React from "react";
import { useParams } from 'react-router-dom';

const ExpensePage = () => {
    let params = useParams();
    return (
        <div>
             Editing the expense of {params.id}.
        </div>
    );
};

export default ExpensePage;