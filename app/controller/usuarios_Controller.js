var Usuario = require("../models/usuario");

var UsuariosController = {
  todos: function(request, response, next) {
    Usuario.todos(function(retorno) {
          if (retorno.erro) {
             response.status(500).send({
              erro: 'Erro ao buscar usuários (' + retorno.mensagem + ')'
          });
          } 
          else {
            response.status(200).send(retorno.usuarios);
          }
        });
  };
};

module.exports = UsuariosController;