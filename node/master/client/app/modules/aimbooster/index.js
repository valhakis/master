import angular from 'angular';

import AimboosterRouters from './aimbooster.routes';

export default angular.module('aimbooster', [])
   .config(AimboosterRouters)
   .name;
