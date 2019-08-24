import { Drawer, List, Divider } from "@material-ui/core";
import React from "react";
import AssesmentIcon from "@material-ui/icons/Assessment";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";
import ForumIcon from "@material-ui/icons/Forum";
import FlagIcon from "@material-ui/icons/Flag";
import GroupIcon from "@material-ui/icons/Group";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import AppBar from "../AppBar/AppBar";
import "./Home.css";
import DocType from "../DocumentType/DocumentType";

function Home() {
  return (
    <div className="container">
      <AppBar className="appHeader" />
        <Drawer variant="permanent" className='drawer' open={true}>
          <List class='vertical'>
            <AssesmentIcon className='icons'/>
            <AssignmentIcon className='icons selected'/>
            <DeleteIcon className='icons'/>
            <ForumIcon className='icons'/>
            <FlagIcon className='icons'/>
            <LocalGroceryStoreIcon className='icons'/>
            <GroupIcon className='icons'/>
            <Divider/>
            <KeyboardArrowRightIcon className='icons'/>
          </List>
        </Drawer>
        <DocType />
    </div>
  );
}

export default Home;
