const mongoose = require("mongoose");

class UserRepository {
  constructor() {}

  save(user, cb) {
    user.save(function (mayHaveError) {
      cb(mayHaveError);
    });
  }

  userById(id, cb) {
    mongoose.model("User").findById(id, cb);
  }

  userByEmail(email, cb) {
    mongoose.model("User").findOne({ email }, cb);
  }
}

module.exports = UserRepository;
