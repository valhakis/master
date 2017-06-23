export default function O01TutorialDirective() {
   return {
      template: require('./O01-tutorial.template.pug')(),
      controller: function O01TutorialController($scope) {
         $scope.persons = [
            {
               fname: 'Paola',
               lname: 'Brodie'
            },
            {
               fname: 'Sharlene',
               lname: 'Veiga'
            },
            {
               fname: 'Star',
               lname: 'Smolen'
            },
            {
               fname: 'Alva',
               lname: 'Schooler'
            },
            {
               fname: 'Latoya',
               lname: 'Bias'
            }
         ];
      }
   };
}
