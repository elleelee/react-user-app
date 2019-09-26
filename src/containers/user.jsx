import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import App from "../containers/app";


class User extends Component {

  handleClick = () => {
    this.props.selectUser(this.props.user);
  };

  render() {
    const props = this.props;

    let containerClasses = "user-card";
    if (this.props.user === this.props.selectedUser) {
      containerClasses += " selected";
    }

    return (
      <div className={containerClasses} onClick={this.handleClick} >
          <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={(r) => this.flippy = r}
          style={{ height: '280px' }}>

           <FrontSide style={{backgroundColor: '#ffc5a1', borderRadius: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h5 className="text-white">Account ID: <span className="text-bold">{props.user.childData.account}</span></h5>
            <img src="user-avatar.svg" alt="" className="user-card-svg"/>
            <h5 className="text-bold margin_top">USER NAME</h5>
            <h3 className="text-grey" id="margin-bottom-none">{props.user.childData.name}</h3>
          </FrontSide>

            <BackSide style={{backgroundColor: '#3f847c', borderRadius: '5px', color: 'white'}}>
              <div className="app-cards">
                {props.apps.map((app) => {
                  const appName = Object.values(app)[0];
                  const appTitle = Object.values(app)[1];
                  return <App key={appName} appName={appName[0]} appTitle={appTitle[0].title} />
                })}
              </div>
            </BackSide>
          </Flippy>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedUser: state.selectedUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(User);
