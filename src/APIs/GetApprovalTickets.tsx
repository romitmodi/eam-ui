import axios from 'axios';
axios
  .get('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
// handle success
    console.log(response.data);
  })
  .catch((error) => {
// handle error
    console.error(error);
  })
.finally(function () {
    // always executed
  }); 