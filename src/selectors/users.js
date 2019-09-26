export default (users, { text }) => {
  return users.filter((user) => {
    const textMatch = user.childData.name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  });
}
