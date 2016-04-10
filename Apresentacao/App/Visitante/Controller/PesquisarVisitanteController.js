moduleApp.controller('PesquisarVisitanteController',
function PesquisarVisitanteController($scope, dataService) {
    $scope.visitante = {};

 

    var address = "/Visitante/ListarVisitantes/";
    $scope.getAll = function () {
        var callback = function (response) {
            $scope.visitantes = response;
        }
        dataService.get(address,{}, callback)
    };

    
   
    $scope.pesquisar = function () {

        if (($scope.cliente.Veiculo.PlacaVeiculo == undefined  || $scope.cliente.Veiculo.PlacaVeiculo == '')
            && ($scope.cliente.NomeCliente ==  undefined  || $scope.cliente.NomeCliente == '') 
            && ($scope.cliente.CpfCliente == undefined || $scope.cliente.CpfCliente == '')
             && ($scope.cliente.CnpjCliente == undefined || $scope.cliente.CnpjCliente == '')
            )
        {
            Modal.growl("Favor informar um parâmetro para a pesquisa", "alert");
            return;
        }


        var callback = function (response) {

            $scope.listaClientes = response;

            if($scope.listaClientes=="")
            {
                Modal.growl("Nenhum registro encontrado", "alert");
            }

        }

        var address = "api/Cliente/?nome=" + $scope.cliente.NomeCliente + "&cpf=" + $scope.cliente.CpfCliente + "&cnpj=" + $scope.cliente.CnpjCliente + "&placa=" + $scope.cliente.Veiculo.PlacaVeiculo;


        dataService.get(address, {}, callback)

    }

 


    
});