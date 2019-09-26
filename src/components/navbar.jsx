import React, { Component } from "react";
import UserListFilter from "../containers/user_list_filter";

class Navbar extends Component {

  onClick = () => {
    window.location.reload();
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand" >
          <div className="nav-left">
            <div className="nav-left-content">
              <img src="brand-logo.svg" alt="" id="nav-icon" />
              <p id="nav-text" onClick={this.onClick}>Home</p>
            </div>
          </div>
          <div className="nav-right">
            <UserListFilter />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
