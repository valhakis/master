import O01TutorialDirective from './O01-tutorial.directive';

var mod = angular.module('app.tutorial.o01Tutorial', []);

mod.directive('o01Tutorial', O01TutorialDirective);

export default mod.name;

var snippets = [
   {
      id: 1,
      code: `
         var i = 'example';

         console.log(i);

         this is perfect.
      `
   },
   {
      id: 2,
      code: `
         console.log('what is this');
         console.log('what is this');
         console.log('what is this');
         console.log('what is this');
         console.log('what is this');
         console.log('what is this');
      `
   }
];
