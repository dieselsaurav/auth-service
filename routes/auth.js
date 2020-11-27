const authController = require("../controller/AuthController");
const auth = require("../middlewares/auth");

const controller = new authController();

module.exports = function (app) {
  app.post("/login", controller.checkLogin, controller.doLogin);
  app.post("/signUp", controller.checkSignUp, controller.doSignUp);
  app.get("/me", auth, controller.doGetMe);
};
