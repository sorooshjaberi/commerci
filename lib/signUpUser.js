const fs = require("fs/promises");
const path = require("path");
const usersPath = path.join(process.cwd(), "databases", "users.json");
export async function addUser(newUser) {
  const users = await getUsers();
  console.log("newUser", users);
  users.push(newUser);
  await fs.writeFile(usersPath, JSON.stringify(users));
}
export async function getUsers() {
  const users = JSON.parse(await fs.readFile(usersPath));
  return users;
}
export async function alreadyCreated(email) {
  const users = await getUsers();
  return !!users.find((user) => user.email == email);
}
export async function findUser(userEmail) {
  const users = await getUsers();
  const user = users.find((user) => user.email === userEmail);
  return user
}
