moduleApp.controller('PesquisarMoradorController',
function PesquisarClienteController($scope, dataService) {
    $scope.NomePagina = "Morador";

    var address = "/Morador/ListarMoradores/";
    $scope.getAll = function () {
        var callback = function (response) {
            $scope.moradores = response;

            angular.forEach($scope.moradores, function (item) {

                item.DataNascimento = JsonDate(item.DataNascimento);

            });

        }
        dataService.get(address,{}, callback)
    };


    $scope.getAll();
});