import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../slices/filtersSlice";
import DatePicker from "react-datepicker";

function ExpenseListFilters(props){
    return (
        <div>
            <input 
                type="text"
                value={props.filters.text}
                onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value));
                }}
            />
            <select name="sortBy"
                    id="sortBy"
                    value={props.filters.sortBy}
                    onChange={(e) => {
                        if(e.target.value === 'date'){
                            props.dispatch(sortByDate())
                        } else if(e.target.value === 'amount'){
                            props.dispatch(sortByAmount())
                        }
                    }} 
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DatePicker
                selected={props.filters.startDate}
                onChange={(date) => props.dispatch(setStartDate(Date.parse(date)))}
                selectsStart
                startDate={props.filters.startDate}
                endDate={props.filters.endDate}
                placeholderText="dd/mm/yyyy"
                dateFormat={'dd/MM/yyyy'}
            />
            <DatePicker
                selected={props.filters.endDate}
                onChange={(date) => props.dispatch(setEndDate(Date.parse(date)))}
                selectsEnd
                startDate={props.filters.startDate}
                endDate={props.filters.endDate}
                minDate={props.filters.startDate}
                placeholderText="dd/mm/yyyy"
                dateFormat={'dd/MM/yyyy'}
            />
        </div>
    )
}

function mapStateToProps(state){
    return {
        filters: state.filters,
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);