angular.module('exemploWebService', []);

angular.module('exemploWebService')
	.controller('PaisesController', PaisesController);	


/* 
	Este exemplo só retornará dados se tu possuires uma conexão
    ativa com a Internet 
*/
function PaisesController ($scope, $http) {
	
	$scope.paises = null;
	$scope.search = {};
	$scope.order = 'name';
	/** 
		Acessa um endereço HTTP que retorna dados em formato JSON
		e no caso de sucesso, atribui o valor à variável paises.
		Para saber como é o retorno acesso link direto no seu navegador.
	 */
	$http.get('http://services.groupkt.com/country/get/all').
        success(function(data) {
            $scope.paises = data.RestResponse.result;
        });
	

}

