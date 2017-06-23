export default function TaskController($scope, $http) {
   this.tasks = [];

   this.resetTask = () => {
      this.task = {
         body: ''
      };
   };

   this.resetTask();

   this.new = (task) => {
      $http.post('/api/tasks', task)
         .then((res) => {
            this.tasks.push(res.data);
         }, (res) => {
            console.log(res.data);
         });
   };
   
   this.remove = (task) => {
      $http.delete('/api/tasks/' + task._id)
         .then((res) => {
            this.tasks.splice(this.tasks.indexOf(task), 1);
            this.resetTask();
         }, (res) => {
            console.log(res.data);
         });
   };

   $http.get('/api/tasks').then((res) => {
      this.tasks = res.data;
   });
}
