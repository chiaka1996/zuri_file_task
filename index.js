const fetch = require("node-fetch");
const fs = require('fs');

const url = 'http://jsonplaceholder.typicode.com/posts';

fetch(url)
.then((resp) => resp.json())
.then((data) => {
    fs.writeFile('result/posts.json',JSON.stringify(data,null, 2), function (err) {
        if (err) throw err;
      });
})
.catch(error => console.log(error));