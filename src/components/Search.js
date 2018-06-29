import React from 'react';


export const Search = props =>{
    return (
        <form className="search">
            <input type="text" placeholder="Search" onChange={props.search}/>
            <select value={props.orderBy} onChange={props.sortByHandler}>
                <option value="sort" disabled={true} selected>Sort by</option>
                <option value="name">Name</option>
                <option value="owner">Owner</option>
                <option value="time">Date</option>
            </select>
        </form>
    );
};