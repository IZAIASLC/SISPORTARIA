moduleApp.controller('CadastrarMoradorController',
function CadastrarMoradorController($scope, dataService, $routeParams,$filter) {
    $scope.NomePagina = "Morador";
    $scope.morador = {}
    $scope.dependente = {};
    $scope.morador.Dependentes = [];
    
    $scope.dependente.Nome = "";
    
    var address = "Morador/SalvarMorador/";
    $scope.edicao = false;
 

    $scope.inicial = function () {
    
      
        //Edição
        if ($routeParams.identificador != undefined) {

            $scope.edicao = true;
           
          

            var callback = function (response) {
                $scope.morador = response;
 
                $scope.morador.DataNascimento = JsonDate($scope.morador.DataNascimento);
 
                if ($scope.morador.Foto != null)
                    $scope.morador.Foto = _arrayToBase64($scope.morador.Foto);

            }
            dataService.get("Morador/ListarMorador/" + $routeParams.identificador, {}, callback)

        }
        
    };

    
    $scope.inicial();


    //Obtem os estados
    var listaEstados = function () {
        var callback = function (response) {
            $scope.listaEstados = response;

        }
        dataService.get("Estado/ListarEstados/", {}, callback)
    }

    listaEstados();


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
            sweetAlert("", "Nome já adicionado à lista", "warning");
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
      
      

      
       
    };


 //Salva o cliente
    $scope.salvar = function () {

        if ($scope.morador.Nome === undefined || $scope.morador.Nome === '') {
            sweetAlert("", "Favor informar o nome do morador", "warning");

            return;
        }

        if ($scope.morador.DataNascimento === undefined || $scope.morador.DataNascimento === '') {
            sweetAlert("", "Favor informar a data de nascimento do morador", "warning");

            return;
        }


        if ($scope.morador.Identidade === undefined || $scope.morador.Identidade === '') {
            sweetAlert("", "Favor informar a identidade do morador", "warning");

            return;
        }

        if ($scope.morador.Endereco === undefined || $scope.morador.Endereco === '') {
            sweetAlert("", "Favor informar o endereco do morador", "warning");

            return;
        }
        

        if ($scope.morador.Sexo === undefined || $scope.morador.Sexo === '') {
            sweetAlert("", "Favor informar o sexo do morador", "warning");

            return;
        }

     
        
 
        var obj = $scope.morador;
         obj.Dependentes = $scope.morador.Dependentes;
      
        if ($routeParams.identificador != undefined) {
            var callback = function (response) {
                sweetAlert("","Dados atualizados com sucesso", "warning");
                window.location = "#/morador";
            }


            dataService.put("Morador/AtualizarMorador", obj, callback)

        } else {

            var callback = function (response) {
                sweetAlert("", "Dados inseridos com sucesso", "warning");

                window.location = "#/morador";
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

            if( $routeParams.identificador != undefined)
            {
                //Editando
                dataService.get("Morador/VerificarCpfCadastrado" + "?parametro=" + $scope.morador.Cpf + "&identificador=" + $routeParams.identificador, {}, callback);
            }
            else
            {
                //Cadastrando
                dataService.get("Morador/VerificarCpfCadastrado" + "?parametro=" + $scope.morador.Cpf + "&identificador=0", {}, callback);
            }
        }
    };

    $scope.editar = function (dependente) {

        $('#modalDependentes').openModal();
 
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