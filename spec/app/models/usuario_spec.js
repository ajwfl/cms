var Usuario = require("../../../app/models/usuario");

describe("O modelo de usuário", function() {
	describe("com o atributo",function() {
		it("id precisa ser valido", function() {
			var usuario = new Usuario();
			expect(usuario.id).toBe(0);
		});

		it("nome precisa ser valido", function() {
			var usuario = new Usuario();
			expect(usuario.nome).toBe("");
		});

		it("login precisa ser valido", function() {
			var usuario = new Usuario();
			expect(usuario.login).toBe("");
		});

		it("senha precisa ser valido", function() {
			var usuario = new Usuario();
			expect(usuario.senha).toBe("");
		});

		it("email precisa ser valido", function() {
			var usuario = new Usuario();
			expect(usuario.email).toBe("");
		});
	});


describe("com o metodo salvar", function() {
	it("deve incluir no banco de dados", function(done) {
		var usuario = new Usuario();
		usuario.nome= "Danilo com teste";
		usuario.login = "didox";
		usuario.senha = "123";
		usuario.email = "danilo@beminfinito.com.br";
		usuario.salvar(function(retorno) {
			expect(retorno.erro).toBE(false);
			done();

		});
	});
   });

describe("com o metodo excluir todos", function() {
	it("deve excluir todos os clientes", function(done) {
		Usuario.excluirTodos(function(retorno) {
			expect(retorno.erro).toBE(false);
			done();

		});
	});
   });

describe("com o metodo buscarPorId", function() {
	it("deve retornar o usuário pelo seu ID", function(done) {
		Usuario.truncateTable(function(retorno1) {
			var usuario = new Usuario();
			usuario.nome= "Danilo com teste";
			usuario.login = "didox";
			usuario.senha = "123";
			usuario.email = "danilo@beminfinito.com.br";
			usuario.salvar(function(retorno2) {
				Usuario.buscarPorID(1, function(retorno3) {
					expect(retorno3.erro).toBE(false);
					expect(retorno3.usuario.id).toBE(1);
					done();
				});
			});
		});
	});
  });

describe("com o metodo todos", function() {
	it("deve retornar todos os clientes", function(done) {
		Usuario.excluirTodos(function(retorno1) {

			var usuario = new Usuario();
			usuario.nome= "Danilo com teste";
			usuario.login = "didox";
			usuario.senha = "123";
			usuario.email = "danilo@beminfinito.com.br";
			usuario.salvar(function(retorno2) {
				Usuario.todos(function(retorno3) {
					expect(retorno3.erro).toBE(false);
					expect(retorno3.usuarios.length).toBE(1);
					done();
				});
			});
		});
	});
  });

describe("com o metodo salvar para atualizar", function() {
	it("deve atualizar o usuário criado", function(done) {
		Usuario.excluirTodos(function(retorno1) {
			var usuario = new Usuario();
			usuario.nome= "Danilo com teste";
			usuario.login = "didox";
			usuario.senha = "123";
			usuario.email = "danilo@beminfinito.com.br";
			usuario.salvar(function(retorno2) {
				Usuario.todos(function(retorno3) {
					var usuario = retorno3.usuarios[0];
					var uUpdate = new Usuario(usuario);
					uUpdate.nome = "Danilo atualizado pelo teste";
					uUpdate.salvar(function(retorno4) {
						expect(retorno4.erro).toBe(false);
						done();
					})
				});
			});
		});
	});
  });

});