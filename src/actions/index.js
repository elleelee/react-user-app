import database from '../firebase/firebase';

export function setUsers(users) {
  return {
    type: 'SET_USERS',
    users
  };
}

export function startSetUsers() {
  return (dispatch) => {
    return database.ref('users').on('value', (snapshot) => {
     const users =[];
     snapshot.forEach((childSnapshot) => {
       const key = childSnapshot.key;
       const childData = childSnapshot.val();
       users.push({
         key,
         childData
       });
     });
      dispatch(setUsers(users));
    });
  };
}


export function setAccounts(accounts) {
  return {
    type: 'SET_ACCOUNTS',
    accounts
  };
}

export function startSetAccounts() {
  return (dispatch) => {
    return database.ref('accounts').on('value', (snapshot) => {
     const accounts =[];
     snapshot.forEach((childSnapshot) => {
       const key = childSnapshot.key;
       const childData = childSnapshot.val();
       accounts.push({
         key,
         childData
       });
     });
      dispatch(setAccounts(accounts));
    });
  };
}

export function selectUser(user) {
  return {
    type: "SELECT_USER",
    user
  };
}
