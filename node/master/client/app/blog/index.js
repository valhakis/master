import BlogPost from './post';

import BlogRoutes from './blog.routes';

var mod = angular.module('app.blog', [BlogPost]);

mod.config(BlogRoutes);

export default mod.name;
