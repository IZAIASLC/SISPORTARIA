moduleApp.config(['$routeProvider', function ($routeProvider) {


    $routeProvider.
      when('/Index', {
          templateUrl: 'Home/Index',
          controller: 'IndexController'
      }).

      when('/Inicial', {
          templateUrl: "App/Inicial/Html/Inicial.html",
          controller: 'IndexController'
      })

     $routeProvider.when('/Morador', {
         templateUrl: "App/Morador/Html/Listar.html",
         controller: "PesquisarMoradorController"
     }),


   $routeProvider.when('/Morador/Cadastrar', {
       templateUrl: "App/Morador/Html/Cadastrar.html",
       controller: "CadastrarMoradorController"
   }),


    $routeProvider.when('/Morador/Cadastrar/:Identificador', {
        templateUrl: "App/Morador/Html/Cadastrar.html",
        controller: "CadastrarMoradorController"
    }),



     $routeProvider.when('/Visitante', {
         templateUrl: "App/Visitante/Html/Listar.html",
         controller: "PesquisarVisitanteController"
     }),


   $routeProvider.when('/Visitante/Cadastrar', {
       templateUrl: "App/Visitante/Html/Cadastrar.html",
       controller: "CadastrarVisitanteController"
   }),


    $routeProvider.when('/Visitante/Cadastrar/:Identificador', {
        templateUrl: "App/Visitante/Html/Cadastrar.html",
        controller: "CadastrarVisitanteController"
    }),




     $routeProvider.when('/VisitaMorador', {
         templateUrl: "App/Visita/Html/Listar.html",
         controller: "PesquisarVisitaMoradorController"
     }),


   $routeProvider.when('/VisitaMorador/Cadastrar', {
       templateUrl: "App/Visita/Html/Cadastrar.html",
       controller: "CadastrarVisitaMoradorController"
   }),


    $routeProvider.when('/VisitaMorador/Cadastrar/:Identificador', {
        templateUrl: "App/Visita/Html/Cadastrar.html",
        controller: "CadastrarVisitaMoradorController"
    }),

   //  $routeProvider.when('/Orcamento/Veiculo/:IdentificadorVeiculo/NovoOrcamento', {
   //      templateUrl: "App/Orcamento/Html/Cadastrar.html",
   //      controller: "CadastrarOrcamentoController"
   //  }),


   //  $routeProvider.when('/Orcamento/Editar/:IdentificadorOrcamento', {
   //      templateUrl: "App/Orcamento/Html/Cadastrar.html",
   //      controller: "CadastrarOrcamentoController"
   //  }),

   //  $routeProvider.when('/Orcamento/:IdentificadorOrcamento', {
   //      templateUrl: "App/Orcamento/Html/Cadastrar.html",
   //      controller: "CadastrarOrcamentoController"
   //  }),


   //  $routeProvider.when('/Orcamento/', {
   //      templateUrl: "App/Orcamento/Html/Pesquisar.html",
   //      controller: "ListarOrcamentoController"
   //  }),



   //  $routeProvider.when('/Funcionario', {
   //      templateUrl: "App/Funcionario/Html/Pesquisar.html",
   //      controller: "PesquisarFuncionarioController"
   //  }),

   //$routeProvider.when('/Funcionario/Cadastrar', {
   //    templateUrl: "App/Funcionario/Html/Cadastrar.html",
   //    controller: "CadastrarFuncionarioController"
   //}),


   // $routeProvider.when('/Funcionario/Editar/:Identificador', {
   //     templateUrl: "App/Funcionario/Html/Cadastrar.html",
   //     controller: "CadastrarFuncionarioController"
   // }),



   //  $routeProvider.when('/TipoServico', {
   //      templateUrl: "App/TipoServico/Html/Pesquisar.html",
   //      controller: "PesquisarTipoServicoController"
   //  }),

   //$routeProvider.when('/TipoServico/Cadastrar', {
   //    templateUrl: "App/TipoServico/Html/Cadastrar.html",
   //    controller: "CadastrarTipoServicoController"
   //}),


   // $routeProvider.when('/TipoServico/Editar/:Identificador', {
   //     templateUrl: "App/TipoServico/Html/Cadastrar.html",
   //     controller: "CadastrarTipoServicoController"
   // }),

   //  $routeProvider.when('/Relatorio/', {
   //      templateUrl: "App/Relatorio/Html/Pesquisar.html",
   //      controller: "PesquisarServicoController"
   //  }),


    $routeProvider.otherwise({
        redirectTo: '/Inicial'
    });
   

}]);

//moduleApp.config(function ($httpProvider) {
//    $httpProvider.interceptors.push('authInterceptorService');
//});


//moduleApp.run(['authService', function (authService) {
//    authService.fillAuthData();
//}]);

