import React, { useState } from 'react';
import "./DocType.css";
import { Button, Typography, ExpansionPanelDetails, ExpansionPanelSummary, MenuList, MenuItem, ExpansionPanel, Divider, ExpansionPanelActions } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function MenuItems() {
  const [open, setOpen] = useState(0);
  const setStateOpen = (val) => {
      if(val !== open) {
          setOpen(val);
      } else {
          setOpen({});
      }
  }
  return (
    <div class='menuItems'>
      <ExpansionPanel square expanded={open === 0} onClick={() => setStateOpen(0)}>
        <ExpansionPanelSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={'heading'}>Filters</Typography>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>
            <h5>PROJECT NAME</h5>
            <MenuList className='menuPageSec'>
                <MenuItem className='innerMenus'>Business Contracts</MenuItem>
                <MenuItem className='innerMenus'>Customer Contracts</MenuItem>
                <MenuItem className='innerMenus selected'>Supplier Contracts</MenuItem>
                <MenuItem className='innerMenus'>Infrastructure Contracts</MenuItem>
                <MenuItem className='innerMenus'>PartnerShip Contracts</MenuItem>
                <MenuItem className='innerMenus'>IP Contracts</MenuItem>
            </MenuList>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Button size="small">Create New Project</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
      <ExpansionPanel square expanded={open === 1} onClick={() => setStateOpen(1)}>
        <ExpansionPanelSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={'heading'}>SMEs</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
            </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={open === 2} onClick={() => setStateOpen(2)}>
        <ExpansionPanelSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={'heading'}>Created By</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
            </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={open === 4} onClick={() => setStateOpen(4)}>
        <ExpansionPanelSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={'heading'}>Status</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
            </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={open === 5} onClick={() => setStateOpen(5)}>
        <ExpansionPanelSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={'heading'}>Period</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
            </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}

export default MenuItems;
