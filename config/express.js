var express = require('express');
module.exports = function(){
  app = express();
  // setando as variáveis de ambiente do express
  app.set('port',3000);
  app.use(express.static('./public'));

  return  app;
}
