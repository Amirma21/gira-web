const {
  hashPassword,
  comparePasswords,
  createToken,
} = require("../middleware/authentication");
const User = require("../model/user");

const CreateUser = async ({ name, password, email, phoneNumber }) => {
  const checkExisteUser = await User.find({ email });
  if (checkExisteUser.length > 0) {
    return { error: "ایمیل وجود دارد !", status: "Error" };
  } else {
    const hashedPassword = await hashPassword(password);
    const values = { name, password: hashedPassword, email, phoneNumber };
    try {
      const user = await User.create(values);
      return { data: user, status: "Success" };
    } catch (err) {
      throw err;
    }
  }
};

const userAuthentication = async ({ email, password }) => {
  const checkExisteUser = await User.findOne({ email });
  if (!checkExisteUser) {
    return { error: "ایمیل وجود ندارد", status: "Error" };
  } else {
    const hashedPassword = checkExisteUser.password;
    const checkPasswords = await comparePasswords(password, hashedPassword);

    if (!checkPasswords) {
      return {
        error: "ایمیل یا رمز عبور وارد شده اشتباه است",
        status: "Error",
      };
    } else {
      const { name, password, email, phoneNumber } = checkExisteUser;
      const token = createToken({name, password, email, phoneNumber});
      return {token , checkExisteUser, status: "Success" };
    }
  }
};

module.exports = {
  CreateUser,
  userAuthentication,
};
