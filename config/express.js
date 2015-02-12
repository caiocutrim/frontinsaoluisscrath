var express = require(express)
, app = express();
module.exports = function(){

  // setando as variáveis de ambiente do express
  app.set('port',3000);
  app.use(express.static('./public'));
}
