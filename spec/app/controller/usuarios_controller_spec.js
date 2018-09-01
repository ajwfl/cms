var request = ("request");

describe("O Controller de usuarios", function() {
	describe("GET /usuarios.json- deve retornar no srviço todos os usuários cadastrados",function() {
		it("deve retornar o statusCode de 200", function(done) {
			request.get("http://localhost:3000/usuarios.json", function(error, response, body) {
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
});