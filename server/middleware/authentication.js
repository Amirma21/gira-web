// const bcrypt = require("bcryptjs");

// const hashPassword = (password) => {
//   return new Promise((res, rej) => {
//     if (err) rej(err);
//     bcrypt.genSalt(10, function (err, salt) {
//       bcrypt.hash(password, salt, function (err, hash) {
//         if (err) rej(err);
//         res(hash);
//       });
//     });
//   });
// };

// module.exports = {
//   hashPassword,
// };

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) reject(err);

      bcrypt.hash(password, salt, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });
};

const comparePasswords = (passwordAttempt, hashedpasswords) => {
  return bcrypt.compare(passwordAttempt, hashedpasswords);
};

const createToken = ({ name, password, email, phoneNumber }) => {
  if ((!name, !password, !email, !phoneNumber)) {
    throw new Error("value is not complited");
  }
  return jwt.sign(
    { name, password, email, phoneNumber },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn:process.env.JWT_EXPIRES,
      algorithm:"HS256"
    }
  );
};

module.exports = {
  hashPassword,
  comparePasswords,
  createToken,
};
