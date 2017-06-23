import config from './app.config';
import run from './app.run';
import Home from './pages/home/home.module';
import Test from './pages/test/test.module';
import Auth from './auth/auth.module';
import Video from './pages/videos/video.module';
import Dashboard from './pages/dashboard/dashboard.module';
import UserController from './controllers/user.controller';
import FooterComponent from './components/footer/footer.module';
import ApplicationInfoComponent from './components/application-info/application-info.module';
import ApplicationController from './controllers/application.controller';
import MainController from './controllers/main.controller';

var app = angular.module('app', ['ui.router', Home, Test, Auth, Dashboard, FooterComponent, ApplicationInfoComponent, Video]);

app.run(run);
app.config(config);

app.controller('UserController', UserController);
app.controller('ApplicationController', ApplicationController);
app.controller('MainController', MainController);

export default app.name;
