import React, { Component } from "react";
import { connect } from "react-redux";
import User from "../containers/user";
import { startSetUsers } from "../actions/index";
import { startSetAccounts } from "../actions/index";
import selectUsers from '../selectors/users';


class UserList extends Component {

  UNSAFE_componentWillMount() {
    this.props.startSetUsers();
    this.props.startSetAccounts();
  }

  render() {
    const props = this.props;
    return (
      <div className="container" id="margin_bottom">
        <h1 style={{marginBottom: '20px'}}>User Dashboard</h1>
        <p style={{fontSize: '20px', color: '#424444'}}>Click on the user to see associated account-app name and title</p>
        <div className="user-list">
          {props.users.map((user) => {
            const accountSelected = [];
            const accountDataSelected = [];
            {props.accounts.map((account) => {
              if (user.childData.account === account.key) {
                accountSelected.push(account.childData.apps);
                accountSelected.map((apps) => {
                  const appNames = Object.keys(apps);
                  const appTitles = Object.values(apps);
                  return accountDataSelected.push({appNames, appTitles});
                })
              }
              return accountSelected;
            })}
            return <User key={user.childData.name} user={user} account={accountSelected} apps={accountDataSelected} />;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: selectUsers(state.users, state.filter),
    accounts: state.accounts
  };
}

const mapDispatchToProps = (dispatch) => ({
  startSetUsers: (user) => dispatch(startSetUsers(user)),
  startSetAccounts: (account) => dispatch(startSetAccounts(account))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
