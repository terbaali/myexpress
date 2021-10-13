var expess = require('express');
var app = expess();

app.use(expess.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
 })
 
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("All listening at http//%s:%s", host, port)
})