import angular from 'angular';
import PostRun from './post.run';
import PostRoutes from './post.routes';

var mod = angular.module('app.blog.post', []);

mod.run(PostRun);
mod.config(PostRoutes);

export default mod.name;
