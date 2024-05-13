const db = require("../models/index");
const { User, Post } = db;
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
    throw error;
  }
}

async function getUserWithPosts(userId) {
  try {
    const user = await User.findByPk(userId, {
      include: {
        model: Post, 
        as: 'posts'
      }
    });
    console.log(user);
    return user;
  } catch (error) {
    console.error('Error fetching user with posts:', error);
    throw error;
  }
}

module.exports = {
  getUsers,
  createUser,
  getUserWithPosts
};
