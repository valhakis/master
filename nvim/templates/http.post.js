$http.post('/api/example', data)
   .then((res) => {
      console.log(res.data);
   }, (res) => {
      console.log(res.data);
   });
