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

var Usuario = function(usuario){

  if (usuario != undefined) {
      this.id = usuario.id;
      this.nome = usuario.nome;
      this.login = usuario.login;
      this.senha = usuario.senha;
      this.email = usuario.email;
  }
  else {
      this.id = 0;
      this.nome = "";
      this.login = "";
      this.senha = "";
      this.email = "";
  }


  this.salvar = function(callback){

      if (this.nome === "") {
        console.log("[Modelo Usuário]Nome de Usuário obrigatorio");
        return;
      }

      if (this.login === "") {
        console.log("[Modelo Usuário]Login obrigatorio");
        return;
      }

      if (this.senha === "") {
        console.log("[Modelo Usuário]Senha obrigatoria");
        return;
      }

    var query = "";  

    if(this.id === 0 || this.id ==="" || this.id === undefined) {

      query ="INSERT INTO cms.usuarios (nome,login,senha,email) VALUES ('" + this.nome + "','" + this.login + "','" + this.senha + "','" + this.email + "');";

      connection.query(query, function(rows, err) {

        if (err !== undefined && err !== null) {
          console.log(err);
           callback.call(null, {erro: true, mensagem: err.message });
           }
        else {
           callback.call(null, {erro: false});
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
    else {

      query ="UPDATE cms.usuarios SET nome='" + this.nome + "' , login='" + this.login + "', senha ='" + this.senha + "', email='" + this.email + "' WHERE id='" + this.id +"';";

      connection.query(query, function(rows, err) {

        if (err !== undefined && err !== null) {
             callback.call(null, {erro: true, mensagem: err.message});
        }
        else {
             callback.call(null, {erro: false});
        }
      });

      connection.end();
    }
  };
};

Usuario.excluirTodos = function(callback) {
      query ="DELETE FROM usuarios";

      connection.query(query, function(rows, err) {

        if (err !== undefined && err !== null) {
             callback.call(null, {erro: true, mensagem: err.message});
        }
        else {
             callback.call(null, {erro: false});
        }
      });

};

Usuario.truncateTable = function(callback) {
      query = "TRUNCATE usuarios;";

      connection.query(query, function(rows, err) {

        if (err !== undefined && err !== null) {
             callback.call(null, {erro: true, mensagem: err.message});
        }
        else {
             callback.call(null, {erro: false});
        }
      });

};

Usuario.excluirTodos = function(callback) {
      query ="DELETE FROM usuarios";

      connection.query(query, function(rows, err) {

        if (err !== undefined && err !== null) {
             callback.call(null, {erro: true, mensagem: err.message});
        }
        else {
             callback.call(null, {erro: false});
        }
      });

};

Usuario.todos = function(callback){
  query = "select * from usuarios;";
  connection.query(query, function(rows, err) {
    if(err !== undefined && err !== null){
      callback.call(null, {
        erro:true,
        mensagem: err.message,
        usuarios: []
      });
    }
    else{
      callback.call(null, {
        erro:false,
        usuarios:rows
      });
    }
  });
};

Usuario.buscarPorID = function(id, callback) {
      query ="SELECT * FROM usuarios WHERE id=" + id +";";

      connection.query(query, function(rows, err) {

        if (err !== undefined && err !== null) {
             callback.call(null, {
              erro: true,
              mensagem: err.message, 
              usuario:{}
            });
        }
        else {
          if (rows.lenght > 0) {
              callback.call(null, {
              erro: false, 
              usuario: rows[0]
            });
          }
          else { 
              callback.call(null, {
              erro: false, 
              usuario: {}
            });
          }
        }
      });

};

Usuario.buscarPorNome = function(id, callback) {
      query ="SELECT * FROM usuarios WHERE nome like  '%" + nome + "%';";

      connection.query(query, function(rows, err) {

        if (err !== undefined && err !== null) {
             callback.call(null, {
              erro: true,
              mensagem: err.message, 
              usuarios: []
            });
        }
        else {
          if (rows.lenght > 0) {
              callback.call(null, {
              erro: false, 
              usuarios: rows
            });
          }
          else { 
              callback.call(null, {
              erro: false, 
              usuarios: []
            });
          }
        }
      });
};

module.exports = Usuario;