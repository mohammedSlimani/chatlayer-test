const echo = require('./echo/echo.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(echo);
};
