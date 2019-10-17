import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
const Table = ({ columns, sortColumn, onSort, data}) => {

    return (   
    <table className="table">
        <TableHeader
        columns={ columns }
        onSort= { onSort }
        sortColumn= { sortColumn }
        />
        <TableBody
            data={ data }
            columns = { columns }
        />
    </table> );
}
 
export default Table;