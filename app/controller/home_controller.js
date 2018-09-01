var Usuario = require("../models/usuario");

var HomeController = {
  index: function(request, response, next) {
    response.render('index', { title: 'Express' });
  },
  usuario: function(request, response, next){

  	var usuario = new Usuario();

    usuario.id = 2;
  	usuario.nome = 'Maria';
  	usuario.login = 'Maria';
  	usuario.senha = 'Maria';
  	usuario.email = 'Maria@gmail.com';
  	usuario.salvar();

    response.send('olá usuario');
  }
};

module.exports = HomeController;
