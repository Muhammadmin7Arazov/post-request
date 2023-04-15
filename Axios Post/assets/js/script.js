axios.post('https://jsonplaceholder.typicode.com/posts/1/comments', {
    firstName: 'Fred',
    lastName: 'Flintstone',
    address:{place:'Mesopotamia',country:"Iraq"}
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });