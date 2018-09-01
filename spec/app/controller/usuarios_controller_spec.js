var request = ("request");
var host = "http://localhost:3000/usuarios.json"
var Usuario = function(usuario){

describe("O Controller de usuarios", function() {
	describe("GET /usuarios.json- deve retornar no srviço todos os usuários cadastrados",function() {
		it("deve retornar o statusCode de 200", function(done) {
			request.get(host + "/usuarios.json", function(error, response, body) {
				if (response === undefined) {
					console.log("Não consegui localizar o servidor");
					expect(503).toBe(200);
				}
				else {
					expect(response.statusCode).toBe(200);
				}
				done();
			});
		});
	});	

describe("GET /usuarios.json?nome=danilo - deve retornar no srviço todos os usuários que tenham o nome de danilo",function() {
		it("deve retornar o statusCode de 200 e retornar o danilo no serviço", function(done) {
			request.get(host + "/?nome=danilo", function(error, response, body) {
				if (response === undefined) {
					console.log("Não consegui localizar o servidor")
					expect(503).toBe(200);
				}
				else {
					expect(response.statusCode).toBe(200);
					var json = JSON.parse(response.body);
					expect(json.length).toBe(1);
					expect(json[0].nome).toBe("Danilo com teste");					
				};
				done();
			});
		});
	});

describe("GET /usuarios/1.json - deve retornar no serviço somente um usuário",function() {
		it("deve retornar o statusCode de 200 e retornar sómente 1 usuário", function(done) {
		Usuario.truncateTable(function(retorno1) {
			var usuario = new Usuario();
			usuario.nome= "Danilo com teste";
			usuario.login = "didox";
			usuario.senha = "123";
			usuario.email = "danilo@beminfinito.com.br";
			usuario.salvar(function(retorno2) {
				request.get(host + "/usuarios/1.json", function(error, response, body) {
					if (response === undefined) {
						console.log("Não consegui localizar o servidor")
						expect(503).toBe(200);
					}
					else {
						expect(response.statusCode).toBe(200);
						var json = JSON.parse(response.body);
						expect(json.id).toBe(1);					
						expect(json.nome).not.toBe(undefined);					
					};
				done();
				});
			});
		});
	});

describe("POST /usuarios.json - deve criar um usuário",function() {
	it("deve retornar o statusCode de 201 e retornar o novo usuário criado", function(done) {
		  request.post({url: host + "/usuarios.json", form : {nome= 'Danilo',
					login = 'didox',senha = '123',email = 'danilo@beminfinito.com.br'}}, function(error, response, body) {
					if (response === undefined) {
						console.log("Não consegui localizar o servidor")
						expect(503).toBe(200);
					}
					else {
						expect(response.statusCode).toBe(201);
						var json = JSON.parse(response.body);
						expect(json.mensagem).toBe("Usuario criado com sucesso");					
					};
					done();
				});
			});
});
