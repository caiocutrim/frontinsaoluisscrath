var http =require('http')
,   app = require('./config/express')()
;
http.createServer(app).listem(app.get('port'),'http:/localhost', function(){
  console.log('Servidor express escutando na porta: '+app.get('port'));
});