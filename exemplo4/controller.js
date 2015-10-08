var app = angular.module('aplicacao', []);


app.controller('pessoaController', ['$scope', function ($scope) {
	
	$scope.nome = 'Guilherme';
	$scope.email = 'guilherme@guilhermesantiago.com.br';
	$scope.dataNascimento = '11/08/1989';
	$scope.saldo = 1500;
	
}]);
