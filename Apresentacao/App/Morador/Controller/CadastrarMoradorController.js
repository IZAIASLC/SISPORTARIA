moduleApp.controller('CadastrarMoradorController',
function CadastrarMoradorController($scope, dataService, $routeParams,$filter) {

    $scope.morador = {}
    $scope.dependente = {};
    $scope.morador.Dependentes = [];
    
    $scope.dependente.Nome = "";
    
    var address = "Morador/SalvarMorador/";
    $scope.edicao = false;
 

    $scope.inicial = function () {
    
      
        //Edição
        if ($routeParams.Identificador != undefined) {

            $scope.edicao = true;
           
         //   $scope.pesquisar($routeParams.Identificador);

            var callback = function (response) {
                $scope.morador = response;

            }
            dataService.get("Morador/ListarMorador/" + $routeParams.Identificador, {}, callback)

        }
        
    };

    
    $scope.inicial();


    //Pesquisa pelo identificador
    $scope.pesquisar = function(identificador) {

        var callback = function(response) {
            $scope.morador = response;
       
        }
        dataService.get("Morador/ListarMorador/" + identificador, {}, callback)
    };

    //Adicionar um novo dependente
    $scope.adicionar = function (dependente) {

      

        if ($scope.dependente.Nome == undefined || $scope.dependente.Nome == '') {
            Modal.growl("Favor informar o nome do dependente", "alert");

            return;
        }
      
        var adicionado = false;
        angular.forEach($scope.morador.Dependentes, function (item) {

            if (item.Nome.toUpperCase() == dependente.Nome.toUpperCase() && item.Identificador != dependente.Identificador) {               
                adicionado = true;
                return;
            }

        });

        if (adicionado) {
            Modal.growl("Nome já adicionado à lista", "alert");
            return;
        }

       

        if (dependente.Identificador > 0) {
            
            angular.forEach($scope.morador.Dependentes, function (item) {
                
                
                if (item.Identificador === dependente.Identificador) {
                    item.Nome = dependente.Nome.toUpperCase();
                    return;
                }
                
            });

            delete $scope.dependente;
        }
        else {
            
            
            dependente.Identificador = 0;
          dependente.Nome =  dependente.Nome.toUpperCase();
            $scope.morador.Dependentes.push(angular.copy(dependente))
            delete $scope.dependente;
        }
      
        $("#modalDependentes").modal('hide');

      
       
    };


 //Salva o cliente
    $scope.salvar = function () {

        if ($scope.morador.Nome === undefined || $scope.morador.Nome === '') {
            Modal.growl("Favor informar o nome do morador", "alert");

            return;
        }

      

        if ($scope.morador.Identidade === undefined || $scope.morador.Identidade === '') {
            Modal.growl("Favor informar a identidade do morador", "alert");

            return;
        }

        if ($scope.morador.Endereco === undefined || $scope.morador.Endereco === '') {
            Modal.growl("Favor informar o endereco do morador", "alert");

            return;
        }
        

        if ($scope.morador.Sexo === undefined || $scope.morador.Sexo === '') {
            Modal.growl("Favor informar o sexo do morador", "alert");

            return;
        }

     
        if ($scope.morador.Cpf === undefined || $scope.morador.Cpf === '' ||$scope.morador.Cpf ===null) {
           
            $scope.prosseguirCadastro();
           
        } else {
            //Validar o cpf
            if (!validar_cpf($scope.morador.Cpf)) {
                Modal.growl("CPF inválido", "alert");
            }
            else {

                $scope.prosseguirCadastro();
            }
        }


       
    };

    //Prosseguir com o cadastro
    $scope.prosseguirCadastro = function () {

        var obj = $scope.morador;
         obj.Dependentes = $scope.morador.Dependentes;
      
        if ($routeParams.Identificador != undefined) {
            var callback = function (response) {
                Modal.growl("Dados atualizados com sucesso", "alert");
                window.location = "#/Morador/Cadastrar/" + $routeParams.Identificador;
            }


            dataService.put("Morador/AtualizarMorador", obj, callback)

        } else {

            var callback = function (response) {
                Modal.growl("Dados inseridos com sucesso", "alert");

                window.location = "#/Morador/Cadastrar/" + response;
            }

            dataService.post(address, obj, callback)
        }
    };

    //Pesquisa se o cpf já está cadastrado.
    $scope.pesquisarCpf = function () {
         
        if (!validar_cpf($scope.morador.Cpf)) {
            Modal.growl("CPF inválido", "alert");
        }
        else {

           
            var callback = function (response) {

                if (response == 'True') {
                    Modal.growl("CPF já está cadastrado.", "alert");
                    $scope.morador.Cpf = '';
                    
                }
            } 

            if( $routeParams.Identificador != undefined)
            {
                //Editando
                dataService.get("Morador/VerificarCpfCadastrado" + "?parametro=" + $scope.morador.Cpf + "&identificador=" + $routeParams.Identificador, {}, callback);
            }
            else
            {
                //Cadastrando
                dataService.get("Morador/VerificarCpfCadastrado" + "?parametro=" + $scope.morador.Cpf + "&identificador=0", {}, callback);
            }
        }
    };

    $scope.editar = function (dependente) {

        $scope.dependente = {};
        $scope.dependente.Identificador = dependente.Identificador;
        $scope.dependente.Nome = dependente.Nome;
    };
   
    //Valida remoção da lista
    $scope.remover = function (dependente) {


        dependente.selecionado = true;

        $scope.morador.Dependentes = $scope.morador.Dependentes.filter(function (dependente) {

            if (!dependente.selecionado)
                return dependente;
        });

        dependente.selecionado = false;

    };

  
   


   // Recupera a lista de marca de veículo
    $scope.$watch('veiculo.Marca', function (identificador) {
     
        if (identificador >0) {
         
            var callback = function (response) {
                $scope.listaModelo = response;
            }
            dataService.get("api/Modelo/?identificador=" + identificador, {}, callback);
        }
    });



});