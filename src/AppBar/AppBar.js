import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./AppBar.css";

function AppBarSection() {
  return (
    <div>
      <AppBar position="static" className="root">
        <Toolbar className="min48">
          <IconButton
            edge="start"
            className="menuBtn"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <h3>INFOSYSNIA</h3>
          <section className="rightHeader" edge="end">
            <IconButton
              className="searchBtn"
              color="inherit"
              aria-label="open drawer"
            >
              <SearchIcon />
            </IconButton>
            <select placeholder='Choose Project' class='projectDD'>
              <option value="All" selected>Choose Project</option>
              <option value="B">Banana</option>
              <option value="C">Cranberry</option>
            </select>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </section>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBarSection;
