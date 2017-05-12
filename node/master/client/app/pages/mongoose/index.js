import MongooseRoutes from './mongoose.routes';
import EditorDirective from './editor/editor.directive';

export default angular.module('mongoose', [])
   .config(MongooseRoutes)
   .directive('mongooseEditor', EditorDirective)
   .name;
