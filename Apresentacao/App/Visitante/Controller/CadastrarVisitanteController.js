moduleApp.controller('CadastrarVisitanteController',
function CadastrarVisitanteController($scope, dataService, $routeParams, $filter) {

    $scope.visitante = {}
  
    var address = "Visitante/SalvarVisitante/";
    $scope.edicao = false;
 

    $scope.inicial = function () {
    
      
        //Edição
        if ($routeParams.Identificador != undefined) {

            $scope.edicao = true;
           
         //   $scope.pesquisar($routeParams.Identificador);

            var callback = function (response) {
                $scope.visitante = response;

            }
            dataService.get("Visitante/ListarVisitante/" + $routeParams.Identificador, {}, callback)

        }
        
    };

    
    $scope.inicial();


    //Pesquisa pelo identificador
    $scope.pesquisar = function(identificador) {

        var callback = function(response) {
            $scope.visitante = response;
       
        }
        dataService.get("Morador/ListarMorador/" + identificador, {}, callback)
    };

    


 //Salva o cliente
    $scope.salvar = function () {

        if ($scope.visitante.Nome === undefined || $scope.visitante.Nome === '') {
            Modal.growl("Favor informar o nome do visitante", "alert");

            return;
        }

       

        if ($scope.visitante.Identidade === undefined || $scope.visitante.Identidade === '') {
            Modal.growl("Favor informar a identidade do visitante", "alert");

            return;
        }

        console.log($scope.visitante.Sexo )

        if ($scope.visitante.Sexo === undefined || $scope.visitante.Sexo === '') {
            Modal.growl("Favor informar o sexo do visitante", "alert");

            return;
        }

        console.log($scope.visitante.Cpf)
        if ($scope.visitante.Cpf === undefined || $scope.visitante.Cpf === '' || $scope.visitante.Cpf === null) {
            
            $scope.prosseguirCadastro();
           
        } else {

            //Validar o cpf
            if (!validar_cpf($scope.visitante.Cpf)) {
                Modal.growl("CPF inválido", "alert");
            }
            else {

                $scope.prosseguirCadastro();
            }
        }


       
    };

    //Prosseguir com o cadastro
    $scope.prosseguirCadastro = function () {

        var obj = $scope.visitante;
        
        if ($routeParams.Identificador != undefined) {
            var callback = function (response) {
                Modal.growl("Dados atualizados com sucesso", "alert");
                window.location = "#/Visitante/Cadastrar/" + $routeParams.Identificador;
            }


            dataService.put("Visitante/AtualizarVisitante", obj, callback)

        } else {

            var callback = function (response) {
                Modal.growl("Dados inseridos com sucesso", "alert");

                window.location = "#/Visitante/Cadastrar/" + response;
            }

            dataService.post(address, obj, callback)
        }
    };

    //Pesquisa se o cpf já está cadastrado.
    $scope.pesquisarCpf = function () {
 
        if (!validar_cpf($scope.visitante.Cpf)) {
            Modal.growl("CPF inválido", "alert");
        }
        else {

           
            var callback = function (response) {

              
                if (response=='True') {

                    Modal.growl("CPF já está cadastrado.", "alert");
                    $scope.visitante.Cpf = '';
                    
                }
            } 

            if( $routeParams.Identificador != undefined)
            {
                //Editando
                dataService.get("Visitante/VerificarCpfCadastrado" + "?parametro=" + $scope.visitante.Cpf + "&identificador=" + $routeParams.Identificador, {}, callback);
            }
            else
            {
                //Cadastrando
                dataService.get("Visitante/VerificarCpfCadastrado" + "?parametro=" + $scope.visitante.Cpf + "&identificador=0", {}, callback);
            }
        }
    };

 

});