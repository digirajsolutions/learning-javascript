/*
//making a get request using fetch api
function getData() {
  console.log('Started data');
  //   url = '../data.txt';
  url = 'https://api.github.com/users';
  fetch(url)
    .then((response) => {
      console.log('Inside first then');
      //   return response.text();
      return response.json();
    })
    .then((data) => {
      console.log('Inside Second then');
      console.log(data);
    });
}

console.log('Before running data');
getData();
console.log('After running data');
*/

/*
//making a post request with fetch api
function postData() {
  url = 'https://jsonplaceholder.typicode.com/posts';
  data = '{"title":"raj", "body":"javascript", "userId":1}';
  params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({
    //   title: 'rohit',
    //   body: 'bar',
    //   userId: 1,
    // }),
    body: data,
  };

  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

postData();
*/
