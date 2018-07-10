angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo:'@',
		url:'@'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/painel-imagens.html';

	return ddo;

})
.directive('minhaFoto', function(){
	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		url:'@',
		titulo:'@'
	};

	ddo.template = '<img class="responsive-img center-block" src="{{url}}" alt="{{titulo}}">';

	return ddo;
})
.directive('meuBotaoPerigo',function(){
	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		nome:'@',
		acao:'&' // passando expressão e nao string
	};

	ddo.template = '<button ng-click="acao(foto)" class="btn waves-effect waves-light red accent-4">{{nome}}</button>';

	return ddo;
});