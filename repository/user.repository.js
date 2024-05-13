const db = require("../models/index");
const { User } = db;
const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Could not retrieve users");
  }
};

async function createUser(userPayload) {
  try {
    const newUser = await User.create(userPayload);
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

module.exports = {
  getUsers,
  createUser
};
