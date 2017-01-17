var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.render('/index.html');
});

app.listen(app.get('port'), function(){
  console.log('listening on', app.get('port'));
});
