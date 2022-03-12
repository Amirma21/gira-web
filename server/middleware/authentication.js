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

module.exports = {
    hashPassword
}