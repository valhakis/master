export default function SectionController($http) {

   this.sections = [];

   this.resetSection = () => {
      this.section = {
         name: ''
      };
   };

   this.create = (section) => {
      $http.post('/api/sections', section)
         .then((res) => {
            this.sections = res.data;
         });
   };

   this.remove = (section) => {
      $http.delete('/api/sections/' + section._id)
         .then((res) => {
            this.sections = res.data;
         });
   };


   (() => {
      this.resetSection();

      $http.get('/api/sections')
         .then((res) => {
            this.sections = res.data;
         });

   })();
}
