import React from 'react';


export const Search = props =>{
    return (
        <form className="search">
            <input type="text" placeholder="Search"/>
            <select name="sort">
                <option value="Sort" disabled={true} selected>Sort by</option>
                <option value="name">Name</option>
                <option value="owner">Owner</option>
                <option value="date">Date</option>
            </select>
        </form>
    );
};