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
        if ($routeParams.Identificador != undefined) {
 

            var callback = function (response) {
                $scope.moradorSelecionado = response.Morador;
                $scope.visitanteSelecionado = response.Visitante;
                $scope.visitaMorador = response;
                $scope.exibirVisitante = true;
                $scope.exibirMorador = true;

            }
            dataService.get("VisitaMorador/ListarVisitaMorador/" + $routeParams.Identificador, {}, callback)

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
            Modal.growl("Favor informar um parâmetro para pesquisa", "alert");
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
        $("#modalMorador").modal('hide');

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
        $("#modalVisitante").modal('hide');

        delete $scope.visitantes;
        delete  $scope.visitante;

    }
    


 //Salva o visita morador
    $scope.salvar = function () {

         
        if ($scope.moradorSelecionado.Nome === undefined || $scope.moradorSelecionado.Nome === '') {
            Modal.growl("Favor informar os dados do morador", "alert");

            return;
        }


        if ($scope.visitanteSelecionado.Nome === undefined || $scope.visitanteSelecionado.Nome === '') {
            Modal.growl("Favor informar os dados do visitante", "alert");

            return;
        }

       

        if ($scope.visitaMorador.Entrada === undefined || $scope.visitaMorador.Entrada === '') {
            Modal.growl("Favor informar a data de entrada da visita", "alert");

            return;
        }
        else { if($scope.visitaMorador.Entrada.contains('Date'))

            $scope.visitaMorador.Entrada =$scope.formatarData($scope.visitaMorador.Entrada);
        }
       

        if ($scope.visitaMorador.Saida!=undefined && $scope.visitaMorador.Saida.contains('Date')) {
            
            $scope.visitaMorador.Saida = $scope.formatarData($scope.visitaMorador.Saida);

        }


 
         $scope.prosseguirCadastro();
 
    };

    $scope.formatarData = function(modelValue)
    {
        var date = new Date(parseInt(modelValue.substr(6)));

        var dateFinal = date.toLocaleDateString();

        var timeFinal = date.toLocaleTimeString();

        return dateFinal + " " + timeFinal;
    }

    //Prosseguir com o cadastro
    $scope.prosseguirCadastro = function () {

        var obj = $scope.visitaMorador;
        obj.Morador = $scope.moradorSelecionado;
        obj.Visitante = $scope.visitanteSelecionado;
        
        if ($routeParams.Identificador != undefined) {

           
            if ($scope.visitaMorador.Saida === undefined || $scope.visitaMorador.Saida === '' || $scope.visitaMorador.Saida === null) {
                Modal.growl("Favor informar a data de saída da visita", "alert");

                return;
            }
             
 
            var callback = function (response) {
                Modal.growl("Dados atualizados com sucesso", "alert");
                window.location = "#/VisitaMorador";
            }


            dataService.put("VisitaMorador/AtualizarVisitaMorador", obj, callback)

        } else {

            var callback = function (response) {
                Modal.growl("Dados inseridos com sucesso", "alert");

                window.location = "#/VisitaMorador";
            }

            dataService.post("VisitaMorador/SalvarVisitaMorador", obj, callback)
        }
    };

 
});