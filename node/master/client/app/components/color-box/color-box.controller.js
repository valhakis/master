class ColorBoxController {
   constructor($scope) {
      $scope.colors = [
         {
            name: "red",
            hex: "#FF0000"
         },
         {
            name: "green",
            hex: "#00FF00"
         },
         {
            name: "blue",
            hex: "#0000FF"
         },
         {
            name: "purple",
            hex: "#FF00FF"
         },
      ];
   }
}

export default ColorBoxController;
