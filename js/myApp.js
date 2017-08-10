var myApp = angular.module('myApp', []);
//var teste [];

myApp.controller('UserContrl', ['$scope', function($scope) {
    //Criando Namespace user details
    //que nos ajudará no visual do DOM
    $scope.user = {};
    $scope.user.details = {
        "username": "Todd Motto",
        "id": "89110232"
    }
}]);
myApp.controller('ListaTrem', ['$scope', function($scope) {
    
    $scope.pessoa = {
        nome: "",
        idade: "",
        sexo: ""
    };
    $scope.lista = [{
        nome: "Alex",
        idade: "25",
        sexo: "Masculino"
    }, {
        nome: "Seará?!",
        idade: "17",
        sexo: "Feminino"
    }];
    console.log("teste");

    $scope.vai = function() {
        console.log("Passou aqui" + $scope.pessoa.sexo);
        
        
        $scope.lista.push({
            nome: $scope.pessoa.nome,
            idade: $scope.pessoa.idade,
            sexo: $scope.pessoa.sexo
        });
        
        console.log($scope.lista.length);
        
        //limpando campos
        $scope.pessoa.nome = '';
        $scope.pessoa.idade = '';
        $scope.pessoa.sexo = '';
        
    }
    
}]);
/**
myApp.controller('adicionaPessoa', ['$scope', function($scope) {
    $scope.vai = function() {
        console.log("Passou aqui" + $scope.pessoa.sexo);
        console.log($rootScope.);
        /*
        $scope.lista.push({
            nome: $scope.pessoa.nome,
            idade: $scope.pessoa.idade,
            sexo: $scope.pessoa.sexo
        });

        
    }

}]);

**/