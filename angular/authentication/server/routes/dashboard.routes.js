var DashboardController = GET.require('controllers/dashboard.controller');
var RequireLoginMiddleware = GET.require('middleware/require-login.middleware');

module.exports = function(app) {
   app.get('/dashboard', RequireLoginMiddleware, DashboardController.RenderDashboardIndexView);
};
