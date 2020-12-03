
var http = require('http');
var url = require("url");

var flag = false;
var i =1;
// setTimeout(()=>{
//     flag = true;
// },10000)
http.createServer(function (req, res) {
    console.log("got request " + i);
    i++;

    var parsedUrl = url.parse(req.url, true); // true to get query as object
  var queryAsObject = parsedUrl.query;

   console.log(JSON.stringify(queryAsObject));
//   console.log("party= == " + queryAsObject.party);
    res.writeHead(200, {'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://localhost:3000'});
    if (!isEmpty(queryAsObject)){
        var isTrueSet = (queryAsObject.party === 'true');
        flag =isTrueSet;
    }
    res.end(JSON.stringify({ ans: flag }));
}).listen(8080);
console.log("server is listening");


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}