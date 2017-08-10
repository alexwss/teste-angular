var myApp = angular.module('myApp', []);

myApp.controller('UserContrl', ['$scope', function ($scope) {
                                            //Criando Namespace user details
                                            //que nos ajudará no visual do DOM
                                            $scope.user = {};
                                            $scope.user.details = {"username":"Todd Motto", "id":"89110232"}        
                                        }]);
myApp.controller('ListaTrem',['$scope', function ($scope){
                                            $scope.lista = [{"nome":"Alex", "idade":"25", "sexo":"Masculino"}, {"nome":"Seará?!", "idade":"17", "sexo":"Feminino"}];                                            
                                        }]);