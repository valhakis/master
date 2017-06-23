module.exports = function LinebreaksFilter() {
   return function(input, optional1, optional2) {
      // return input.replace(/(?:\r\n|\r|\n)/g, '<br />');
      // console.log(input);
      return input;
   };
};
