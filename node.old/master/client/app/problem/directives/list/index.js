module.exports = function listDirective() {
   return {
      scope: {
         problems: '='
      },
      template: require('./template.pug')()
   };
};
