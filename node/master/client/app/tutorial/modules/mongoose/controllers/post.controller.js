export default function PostController($rootScope, $http) {
   this.posts = [];
   this.post = {};

   this.resetPost = () => {
      this.post = {
         title: '',
         body: '',
         user: $rootScope.currentUser.id
      };
   };

   this.create = (post) => {
      $http.post('/api/posts', post)
         .then((res) => {
            this.posts.push(post);
            this.resetPost();
         }, (res) => {
            console.log(res.data);
         });
   };

   this.drop = () => {
      console.log('I have to drop post collections');
   };

   this.remove = (post) => {
      $http.delete('/api/posts/' + post._id)
         .then((res) => {
            this.posts.splice(this.posts.indexOf(post), 1);
         }, (res) => {
            console.log(res.data);
         });
   };

   this.loadPosts = () => {
      $http.get('/api/posts')
         .then((res) => {
            this.posts = res.data;
         }, (res) => {
            console.log(res.data);
         });
   };

   (() => {
      this.resetPost();
      this.loadPosts();
   })();
}
