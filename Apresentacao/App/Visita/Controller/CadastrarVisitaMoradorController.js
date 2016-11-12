moduleApp.controller('CadastrarVisitaMoradorController',
function CadastrarVisitaMoradorController($scope, dataService, $routeParams, $location) {
    $scope.morador = {};
    $scope.visitante = {};
    $scope.visitaMorador = {};
    $scope.moradorSelecionado = {};
    $scope.visitanteSelecionado = {};
    $scope.exibirVisitante = false;
    $scope.exibirMorador = false;


    $scope.pageSize = 5;
  

    $scope.pagesCount = 0;
    $scope.page = 0;
 

    

    $scope.inicial = function () {

    
        //Edição
        if ($routeParams.identificador != undefined) {
 

            var callback = function (response) {
              
                $scope.visitanteSelecionado = response;
                
                $scope.exibirVisitante = true;
               

            }
            dataService.get("Visitante/ListarVisitanteId/" + $routeParams.identificador, {}, callback)

        }

    };


    $scope.inicial();


    $scope.pesquisarMorador = function ()
    {
        
        $scope.search(0);
    }
 
    //Pesquisar Morador
    $scope.search = function (page)
    {
         
        var page = page || 0;

        if ($scope.morador.Nome === undefined && $scope.morador.Endereco === undefined)
        {
            sweetAlert("", "Favor informar um parâmetro para pesquisa", "warning");
            return;
        }

        var callback = function (response) {
            
            $scope.page = response.Page;
            $scope.pagesCount = response.TotalPages;
            $scope.totalCount = response.TotalCount;
            $scope.moradores = response.Items;
            $scope.nextPage = response.Page + 1;
 
            $scope.exibir = false;
            if ($scope.moradores.length == 0)
            {
                $scope.exibir = true;
                Modal.growl("Não foi localizado morador com o parâmetro informado", "alert");
                return;
            }
        }
        dataService.get("Morador/Pesquisar?nome=" + $scope.morador.Nome + "&endereco=" + $scope.morador.Endereco + "&page=" + page, {}, callback)
 
        
    }
   
    //Selecionar morador
    $scope.selecionarMorador = function (morador)
    { 
        $scope.moradorSelecionado = morador;
        $scope.exibirMorador = true;
        $("#modalMorador").closeModal();

        delete $scope.moradores;
        delete $scope.morador;

    }

    $scope.novoMorador = function ()
    {
        $("#modalMorador").modal('hide');
        window.location = "#/Morador/Cadastrar";
    }

    $scope.novoVisitante = function () {

        $("#modalVisitante").modal('hide');
        window.location = "#/Visitante/Cadastrar";
    }

    //Pesquisar visitante
    $scope.pesquisarVisitante = function (visitante) {

 
        if (visitante.Nome === undefined && visitante.Identidade === undefined) {
            Modal.growl("Favor informar um parâmetro para pesquisa", "alert");
            return;
        }

        var callback = function (response) {
            $scope.visitantes = response;
            $scope.exibir = false;

            if ($scope.visitantes.length == 0) {
                $scope.exibir = true;
                Modal.growl("Não foi localizado visitante com o parâmetro informado", "alert");
                return;
            }

        }
        dataService.get("Visitante/Pesquisar?nome=" + visitante.Nome + "&identidade=" + visitante.Identidade, {}, callback)
    }

    //Selecionar visitante
    $scope.selecionarVisitante = function (visitante) {
        
        $scope.visitanteSelecionado = visitante;
        $scope.exibirVisitante = true;
        $("#modalVisitante").closeModal();

        delete $scope.visitantes;
        delete  $scope.visitante;

    }
    


 //Salva o visita morador
    $scope.salvar = function () {

         
        if ($scope.moradorSelecionado.Nome === undefined || $scope.moradorSelecionado.Nome === '') {
           sweetAlert("","Favor informar os dados do morador", "warning");

            return;
        }


        if ($scope.visitanteSelecionado.Nome === undefined || $scope.visitanteSelecionado.Nome === '') {
            sweetAlert("", "Favor informar os dados do visitante", "warning");

            return;
        }

       

        if ($scope.visitaMorador.Entrada === undefined || $scope.visitaMorador.Entrada === '') {
            sweetAlert("", "Favor informar a data de entrada da visita", "warning");

            return;
        }
        
 

        var obj = $scope.visitaMorador;
        obj.Morador = $scope.moradorSelecionado;
        obj.Visitante = $scope.visitanteSelecionado;
        
        if ($routeParams.Identificador != undefined) {

           
            if ($scope.visitaMorador.Saida === undefined || $scope.visitaMorador.Saida === '' || $scope.visitaMorador.Saida === null) {
                sweetAlert("","Favor informar a data de saída da visita", "warning");

                return;
            }
             
 
            var callback = function (response) {
                sweetAlert("", "Dados atualizados com sucesso", "warning");
                window.location = "#/visita-morador";
            }


            dataService.put("VisitaMorador/AtualizarVisitaMorador", obj, callback)

        } else {

            var callback = function (response) {
                sweetAlert("", "Dados inseridos com sucesso", "warning");

                window.location = "#/visita-morador";
            }

            dataService.post("VisitaMorador/SalvarVisitaMorador", obj, callback)
        }
    };

 
});