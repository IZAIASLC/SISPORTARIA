moduleApp.controller('PesquisarVisitanteController',
function PesquisarVisitanteController($scope, dataService) {
    $scope.NomePagina = "Visitante";

    var address = "/Visitante/ListarVisitantes/";
    $scope.getAll = function () {
        var callback = function (response) {
             
            $scope.visitantes = response;
 
            angular.forEach($scope.visitantes, function (item) {
              
               item.DataNascimento = JsonDate(item.DataNascimento);
  
            });
 
        }
        dataService.get(address,{}, callback)
    };

    $scope.getAll();
 
});