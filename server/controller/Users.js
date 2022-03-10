const User = require("../model/user");

const CreateUser = async ({ name, password, email , phoneNumber }) => {
  const values = { name, password, email , phoneNumber};
  try {
    const user = await User.create(values);
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = {
    CreateUser
}