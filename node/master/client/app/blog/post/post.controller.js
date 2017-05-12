export default function PostController($http) {
   this.post = {
      title: '',
      body: ''
   };

   this.posts = [];

   this.createPost = function(post) {
      console.log(post);
      $http.post('/api/posts', post).then(function(res) {
         console.log(res.data);
      });
   };

   $http.get('/api/posts').then(function(res) {
      console.log(res.data);
   });
}
