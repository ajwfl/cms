/*var db = require('../../config/db.js');

mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cms'
});

connection.connect();

*/

var connection = require('../../config/db.js');

var Usuario = function(){
  this.id = 0;
  this.nome = "";
  this.login = "";
  this.senha = "";
  this.email = "";

  this.salvar = function(){

    if(this.id == 0 || this.id =="" || this.id == undefined) {

      if (this.nome == "") {
        console.log("[Modelo Usuário]Nome de Usuário obrigatorio");
        return;
      }

      if (this.login == "") {
        console.log("[Modelo Usuário]Login obrigatorio");
        return;
      }

      if (this.senha == "") {
        console.log("[Modelo Usuário]Senha obrigatoria");
        return;
      }

      var query ="INSERT INTO cms.usuarios (nome,login,senha,email) VALUES ('" + this.nome + "','" + this.login + "','" + this.senha + "','" + this.email + "');";

      connection.query(query, function(rows, err) {

        if (err != undefined) {
            console.log(err + " Erro ao incluir dados de usuário");
           }
        else {
            console.log('Usuario incluido com sucesso ');
        }

        connection.end();

   /*     db.cnn.exec("SELECT * FROM cms.usuarios:", function (rows, err) {


        if (err) {
          console.log('Erro ao executar a query');
          callback.call(null,null);
          }
        else {
          console.log("=============================")
          console.log(rows)
          }
        })
      } */

       });
    }
  };
};


module.exports = Usuario;