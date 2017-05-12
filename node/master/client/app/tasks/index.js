import TaskRoutes from './task.routes';

var mod = angular.module('app.tasks', []);

mod.config(TaskRoutes);

export default mod.name;
