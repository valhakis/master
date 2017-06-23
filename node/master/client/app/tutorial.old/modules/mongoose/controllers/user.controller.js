export default function UserController($http) {
   this.users = [];
   this.user = {};

   this.resetUser = () => {
      this.user = {
         email: '',
         password: ''
      };
   };

   this.add = (user) => {
      $http.post('/api/users', user)
         .then((res) => {
            this.users.push(res.data);
            this.resetUser();
         }, (res) => {
            console.log(res.data);
         });
   };

   this.remove = (user) => {
      $http.delete('/api/users/' + user._id)
         .then((res) => {
            this.users.splice(this.users.indexOf(user), 1);
         }, (res) => {
            console.log(res);
         });
   };

   this.loadUsers = () => {
      $http.get('/api/users')
         .then((res) => {
            this.users = res.data;
         }, (res) => {
            console.log(res.data);
         });
   };

   (() => {
      this.resetUser();
      this.loadUsers();
   })();
}
