export default function KittenController($http) {
   this.kittens = [];
   this.kitten = {};

   this.resetKitten = () => {
      this.kitten = {
         name: ''
      };
   };

   this.findKittens = () => {
      $http.get('/api/kittens')
         .then((res) => {
            this.kittens = res.data;
         }, (res) => {
            console.log(res);
         });
   };

   this.remove = (kitten) => {
      $http.delete('/api/kittens/' + kitten._id)
         .then((res) => {
            this.kittens.splice(this.kittens.indexOf(kitten), 1);
         }, (res) => {
            console.log(res.data);
         });
   };

   this.create = (kitten) => {
      $http.post('/api/kittens', kitten)
         .then((res) => {
            this.kittens.push(res.data);
            this.resetKitten();
         }, (res) => {
            console.log(res.data);
         });
   };

   (() => {
      this.resetKitten();
      this.findKittens();
   })();
}
