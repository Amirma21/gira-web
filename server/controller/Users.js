
const { hashPassword } = require("../middleware/authentication");
const User = require("../model/user");

const CreateUser = async ({ name, password, email, phoneNumber }) => {
  const checkExisteUser = await User.find({ email });
  if (checkExisteUser.length > 0) {
    return { error: "ایمیل وجود دارد !", status: "Error" };
  } else {
    const hashedPassword = await hashPassword(password)
    const values = { name, password:hashedPassword, email, phoneNumber };
    try {
      const user = await User.create(values);
      return {data: user , status:"Success"};
    } catch (err) {
      throw err;
    }
  }
};

module.exports = {
  CreateUser,
};
