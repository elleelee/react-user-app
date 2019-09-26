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
          <h4>App: <span className="text-bold">{props.appName}</span></h4>
          <h5>{props.appTitle}</h5>
        </div>
      </div>
    );
  }
}

export default App;
