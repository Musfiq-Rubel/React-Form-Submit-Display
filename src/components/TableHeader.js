import React from 'react';

const TableHeader = () => { 
    return (
        <thead class="thead-light">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Skills</th>
        </tr>
    </thead>
    );
}

export default TableHeader;