var mysql = require('mysql');
var post  = {id: 1, title: 'Hello MySQL'};
var temp = mysql.format('INSERT INTO posts SET ? where ?',[post]);
console.log(temp);