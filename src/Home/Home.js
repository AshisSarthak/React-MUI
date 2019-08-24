import { Drawer, List, ListItem, ListItemText, Paper } from "@material-ui/core";
import React from "react";
import AppBar from "../AppBar/AppBar";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <AppBar className="appHeader" />
      <Paper className={'layout'}>
        <Drawer variant="permanent" open={true}>
          <List className="drawer">
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Paper>
    </div>
  );
}

export default Home;
