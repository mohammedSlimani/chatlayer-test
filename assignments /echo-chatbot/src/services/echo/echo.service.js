// Initializes the `echo` service on path `/echo`
const { Echo } = require('./echo.class.js');
const hooks = require('./echo.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');

  const options = {
    name: 'echo',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/echo', new Echo(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('echo');

  service.hooks(hooks);
};
