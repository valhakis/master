import ColorBoxController from './color-box.controller';

export default function ColorBoxDirective() {
   return {
      template: require('./color-box.template.pug')(),
      controller: ColorBoxController,
      link: function() {

      }
   };
}
