export default function getVisibleExpense(expenses, { text, sortBy, startDate, endDate }){
        return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
        const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt > b.createdAt;
        } else if(sortBy === 'amount'){
            return a.amount > b.amount;
        }
    });
}