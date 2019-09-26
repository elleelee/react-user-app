import React, { Component } from "react";

class App extends Component {

  render() {
    const props = this.props;

    return (
      <div className="app-card">
        <div className="app-card-avatar">
          <img src="app-card.svg" alt=""/>
        </div>
        <div className="app-card-content">
          <h5>App Name: <span className="text-bold">{props.appName}</span></h5>
          <p>Title: {props.appTitle}</p>
        </div>
      </div>
    );
  }
}

export default App;
