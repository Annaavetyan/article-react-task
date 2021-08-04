import React,{useMemo} from "react";
import MOCK_DATA from './MOCK_DATA.json';
import {useTable} from 'react-table';
import COLUMNS from './columns'


const BasicTable = ()=> {
   const columns = useMemo(()=>COLUMNS,[]);
   const data = useMemo(()=>MOCK_DATA,[]);
   const tableInstance = useTable({
      columns:columns,
      data: data,
   })
   const { getTableProps,getTableBodyProps,headerGroups,rows, prepareRow } = tableInstance;
   debugger
   return (
      <div>
         <table {...getTableProps()}>
            <thead>
               <tr>
                  {
                      headerGroups.map(
                          (headerGroup)=>{
                             return (
                                 <tr {...headerGroup.getHeaderGroupProps()}>
                                    {
                                       headerGroup.headers.map((header)=>{
                                          return <th>{header.Header}</th>}
                                       )
                                    }

                                 </tr>
                             )
                          })
                  }
               </tr>
            </thead>
            <tbody>
               {
                  rows.map((row)=>{
                     prepareRow(row);
                     return (
                         <tr>{
                            row.cells.map((cell)=>{
                               debugger
                               return(
                                   <td>{cell.render('Cell')}</td>
                               )
                            })
                         }</tr>
                     )
                  })
               }
            </tbody>
         </table>
      </div>
   )
}

export default BasicTable;