const { generalResponse } = require("../helpers/response.helper");
const { getUsers } = require("../repository/user.repository");

async function getAllUsers(req, res) {
  try {
    /**
     * getUsers is a repository here - in repository you can write functions which interacts with different services
    such as DB, S3 and other external services and you may use it throughout your application in any controller you want. 
     */
    const users = await getUsers();
    return generalResponse(res, users, "Users Retrieved!", true);
  } catch (error) {
    console.error("Error fetching users:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching users!",
      "error",
      true
    );
  }
}

async function insertUser(req, res) {
  try {
    const { firstName, lastName, email } = req.body;
    const newUser = createUser({ firstName, lastName, email });
    return generalResponse(
      res,
      newUser,
      "Inserted New User Successfully!",
      true
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching users!",
      "error",
      true
    );
  }
}

module.exports = {
  getAllUsers,
  insertUser,
};
