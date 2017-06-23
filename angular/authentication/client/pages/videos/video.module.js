import routes from './video.routes';
import VideoController from './video.controller';

var mod = angular.module('app.video', []);

mod.config(routes);

mod.controller('VideoController', VideoController);

export default mod.name;
