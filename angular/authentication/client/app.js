import config from './app.config';
import Home from './pages/home/home.module';
import Test from './pages/test/test.module';
import Auth from './auth/auth.module';
import UserController from './controllers/user.controller';
import FooterComponent from './components/footer/footer.module';

var app = angular.module('app', ['ui.router', Home, Test, Auth, FooterComponent]);

app.config(config);

app.controller('UserController', UserController);

export default app.name;
