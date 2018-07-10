angular.module('alurapic').controller('FotosController', function ($scope, recursoFoto) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	//var recursoFoto = $resource('v1/Fotos/:fotoId');

	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	},function(erro){
		console.log(erro);
	});

	// $http.get('v1/fotos').success(function(fotos){
	// 	//console.log(fotos);
	// 	$scope.fotos = fotos;
	// }).error(function(erro){
	// 	console.log(erro);
	// });

	$scope.remover = function(foto){

		recursoFoto.delete({fotoId : foto._id }, function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso';
		},function(erro){
			console.log(erro);
			$scope.mensagem = 'nao foi possivel apagar a foto ' + foto.titulo;
		});
		// $http.delete('v1/fotos/' + foto._id)
		// .success(function(){
		// 	var indiceFoto = $scope.fotos.indexOf(foto);
		// 	$scope.fotos.splice(indiceFoto, 1);
		// 	$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso';
		// })
		// .error(function(erro){
		// 	$scope.mensagem = 'nao foi possivel apagar a foto ' + foto.titulo;
		// });
	};
});