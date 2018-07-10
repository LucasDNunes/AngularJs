angular.module('alurapic').controller('FotoController',function($scope, recursoFoto, $routeParams){
	$scope.foto = {};
	$scope.mensagem = '';

	// var recursoFoto = $resource('v1/fotos/:fotoId',null,{
	// 	updade : {
	// 		method: "PUT"
	// 	}
	// });

	if ($routeParams.fotoId) {
		$http.get('/v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(erro){
			console.log('erro maldito'+ erro);
			$scope.mensagem = 'Não foi possivel obter o id da foto';
		});
	}

	$scope.submeter = function(){
		if ($scope.formulario.$valid) {
			if ($routeParams.fotoId) {
				recursoFoto.updade({fotoId : $routeParams.fotoId}, $scope.foto, function(){
					$scope.foto = {};
					$scope.formulario.$setPristine(); // limpa o formulario sem disparadar as msg de erro
					$scope.mensagem = 'A foto '+ $scope.foto.titulo + ' foi alterada com sucesso';
				},function(erro){
					console.log(erro);
					$scope.mensagem = 'erro ao alterar a foto '+$scope.foto.titulo;
				});

				// $http.put('v1/fotos/'+ $routeParams.fotoId, $scope.foto)
				// .success(function(){
				// 	$scope.foto = {};
				// 	$scope.formulario.$setPristine(); // limpa o formulario sem disparadar as msg de erro
				// 	$scope.mensagem = 'A foto '+ $scope.foto.titulo + ' foi alterada com sucesso';
				// })
				// .error(function(erro){
				// 	console.log(erro);
				// 	$scope.mensagem = 'erro ao alterar a foto '+$scope.foto.titulo;
				// });

			}else{

				$http.post('v1/fotos', $scope.foto)
				.success(function(){
					$scope.foto = {};
					$scope.formulario.$setPristine();
					$scope.mensagem = 'Foto cadastrada com sucesso :)';
				})
				.error(function(erro){
					$scope.mensagem = 'Não foi possivel cadasrar a foto :('
					console.log(erro);
				})
			}
		}
		
	};
});