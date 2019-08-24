import React from "react";
import "./DocType.css";
import { Button } from "@material-ui/core";
import MenuItems from "./Menus";
import TableWrapper from "./TableWrapper";

function DocType() {
  return (
    <div class='docType'>
      <h4>Document Type</h4>
      <div class='btnSet'>
      <Button variant="contained" className='button download'>
        Download
      </Button>
      <Button variant="contained" className=' button createBtn'>
        Create New Document Type
      </Button>
      </div>
      <hr />
      <div className='pageSec'>
        <MenuItems />
        <TableWrapper />
      </div>
    </div>
  );
}

export default DocType;
