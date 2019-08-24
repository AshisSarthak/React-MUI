import React, { useState } from 'react';
import "./DocType.css";
import { Chip, Button, Tabs, Tab } from '@material-ui/core';
import data from './data.json';
import Table from './Table';

function TableWrapper() {
    const [filter, setFilter] = useState([]);
    const [tab, setTab] = useState('Assigned');
    let tabs = '';

    const handleChangeTab= (newValue) =>{
        setTab(newValue);
    };

    const removeFilter = (val) => {
        let filters = filter;
        if(filters.length){
            filters = filters.filter(v => val===v);
        }
        setFilter(filters);
    };
    let status = []; 

    data.forEach(function(val){
        if(status.indexOf(val.status) < 0) {
            status.push(val.status);
        }
    });
    const tableData = data.filter(v => tab===v.status);
  return (
    <div class='tableWrapper'>
        <div className ='chipSection'>
            {
                filter.map(val=>(
                    <Chip
                        label={val}
                        onDelete={removeFilter(val)}
                        variant="outlined"
                    />
                ))
            }
            {
                !!filter.length && <Button size="small" onClick='removeFilter([])'>Clear All</Button>
            }
        </div>
        <div className='tableSection'>
        <Tabs
            value={tabs}
            onChange={() => handleChangeTab(tab)}
            indicatorColor="primary"
            textColor="primary"
            aria-label="disabled tabs example"
        >
            {
                status.map(val => (
                    <Tab label={val} />
                ))
            }
        </Tabs>
        <Table rows={tableData} />
        </div>
    </div>
  );
}

export default TableWrapper;
