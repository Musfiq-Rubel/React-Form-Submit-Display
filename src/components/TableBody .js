import React from 'react';

const TableBody = (props)=>{
    
    const rows = props.userData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
                <td>{row.country}</td>
                <td>{row.gender}</td>
                <td>{row.skills}</td>
            </tr>
        );
    });
    
    return(
        <tbody>
       {rows}
       </tbody>
    );
}

export default TableBody;