data = fetch("http://invalid.dummyjson.com/quotes/random")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error.message));
