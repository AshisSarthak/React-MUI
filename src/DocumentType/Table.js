import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import "./DocType.css";



export class Table extends React.Component { 

  
  columns = ['documentType',
    'language',
    'domain',
    'intent',
    'entities',
    'documents',
    'assigned',
    'tagged',
    'trained',
    'status',];  

    getColumns =() =>  this.columns.map(val => (
      <TableCell align="right">{val}</TableCell>
    ))
    render () {
      return (
        <Table className={'table'}>
            <TableHead>
              <TableRow>
                {
                  this.getColumns()
                }
              </TableRow>
            </TableHead>
            <TableBody>
            </TableBody>
          </Table>
      );
    }    

}

export default Table;


