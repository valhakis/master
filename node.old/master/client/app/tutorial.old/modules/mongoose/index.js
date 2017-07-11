import angular from 'angular';
import MongooseRoutes from './mongoose.routes';

var mod = angular.module('tutorial.mongoose', []);

mod.config(MongooseRoutes);

export default mod.name;
