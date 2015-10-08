var app = angular.module('exemplo5', []);

app.controller('pessoasController', ['$scope', function ($scope) {

	$scope.search = {};
	$scope.pessoas = [
		{nome: 'Guilherme', email: 'guilherme@guilhermesantiago.com.br', dataNascimento: '11/08/1989', saldo: 1500, foto: 'http://lorempixel.com/output/people-q-c-64-64-3.jpg'},
		{nome: 'João', email: 'joao@guilhermesantiago.com.br', dataNascimento: '8/10/1978', saldo: 1000, foto: 'http://lorempixel.com/output/people-q-c-64-64-5.jpg'},
		{nome: 'Francisco', email: 'francisco@guilhermesantiago.com.br', dataNascimento: '14/03/1990', saldo: 2500, foto: 'http://lorempixel.com/output/people-q-c-64-64-8.jpg'},
		{nome: 'Cláudia', email: 'claudia@guilhermesantiago.com.br', dataNascimento: '01/01/1992', saldo: 13550, foto: 'http://lorempixel.com/output/people-q-c-64-64-1.jpg'},
		{nome: 'Angelica', email: 'angelica@guilhermesantiago.com.br', dataNascimento: '29/11/1988', saldo: 4000, foto: 'http://lorempixel.com/output/people-q-c-64-64-9.jpg'},
		{nome: 'Catarina', email: 'catarina@guilhermesantiago.com.br', dataNascimento: '11/09/1987', saldo: 15000, foto: 'http://lorempixel.com/output/people-q-c-64-64-7.jpg'}
	];

}]);

app.filter('monetario', function () {
	return function (num) {

        cents = x = 0;

	   	if(num<0) {
	    	num = Math.abs(num);
	    	x   = 1;
	   	}

	   	if (isNaN(num)) 
	   		num = "0";
	    
	    cents = Math.floor((num*100+0.5)%100);
	   	num   = Math.floor((num*100+0.5)/100).toString();

	   	if (cents < 10) 
	   		cents = "0" + cents;

      	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        	num = num.substring(0,num.length-(4*i+3)) + '.' + num.substring(num.length-(4*i+3));

	   	ret = num + ',' + cents;

	   	if (x == 1) 
	   		ret = ' - ' + ret;
	   	
	   	return 'R$ ' + ret;
	}
});