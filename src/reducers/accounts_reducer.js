export default function(state, action) {

  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case "SET_ACCOUNTS":
      return action.accounts;
    default:
      return state;
  }
}
