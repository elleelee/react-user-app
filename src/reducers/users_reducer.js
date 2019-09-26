export default function(state, action) {

  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case "SET_USERS":
      return action.users;
    default:
      return state;
  }
}
