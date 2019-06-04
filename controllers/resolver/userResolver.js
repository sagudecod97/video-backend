const { User } = require("../../models/User");
const jwt = require("jsonwebtoken");
const kEY = "QWERTY123";

module.exports = {
  newUser: user => {
    return new Promise((resolve, reject) => {
      const { name, last_name, email, password } = user; // eslint-disable-line
      const newUser = User({
        name,
        last_name,
        email,
        password
      });
      newUser.save((err, user) => {
        err ? reject(err) : resolve(user);
      });
    });
  },
  getUser: userid => {
    return new Promise((resolve, reject) => {
      User.findById(userid)
        .exec()
        .then(user => {
          resolve(user);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getUsers: () => {
    return new Promise((resolve, reject) => {
      User.find({ is_active: true })
        .exec()
        .then(users => {
          resolve(users);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  deleteUser: userid => {
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate(
        userid,
        { $set: { is_active: false } },
        { new: true }
      )
        .exec()
        .then(user => {
          resolve(user);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  updateUser: (userid, body) => {
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate(userid, { $set: body }, { new: true })
        .exec()
        .then(user => {
          resolve(user);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  findUserByEmail: email => {
    return new Promise((resolve, reject) => {
      User.findOne({ email })
        .exec()
        .then(user => {
          resolve(user);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  validatePasswordByUser: (user, password) => {
    return new Promise((resolve, reject) => {
      user.comparePassword(password, (err, isMatch) => {
        if (err) reject(err);
        resolve(isMatch);
      });
    });
  },
  generateTokenByUser: user => {
    const userPayload = {
      id: user._id,
      email: user.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60
    };
    return jwt.sign(userPayload, kEY);
  }
};
