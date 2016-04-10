using System.Web;
using System.Web.Optimization;

namespace Apresentacao
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/angularjs/jquery-{version}.js",
                        
                        "~/Scripts/MicrosoftAjax.js",
                        "~/Scripts/MicrosoftMvcAjax.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/angularjs/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/angularjs/jquery.unobtrusive*",
                        "~/Scripts/angularjs/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                
                "~/Content/Site.css",
                   "~/Content/jquery-ui.css",
                    "~/Content/angular-ui.css",
                     "~/Content/bootstrap-theme.css",
                      "~/Content/bootstrap.css",
                   "~/Content/font-awesome.min.css",
                      "~/Content/select2.css" 
 
                ));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css" ,
                          "~/Content/bootstrap-datetimepicker.css" 
                        
                         
                        ));

            
                    
           

            bundles.Add(new ScriptBundle("~/bundles/angularJS").Include(
           "~/Scripts/angularjs/angular.js",
           "~/Scripts/angularjs/angular-route.js",
           "~/Scripts/angularjs/angular-loader.js",
            "~/Scripts/angularjs/angular-resource.js",
             "~/Scripts/angularjs/angular-animate.js",
              "~/Scripts/angularjs/angular-local-storage.js",
                 "~/Scripts/angularjs/angular-ui/angular-ui.js",


                  "~/Scripts/angularjs/bootbox.js",
               "~/Scripts/angularjs/validar_cpf.js",
                "~/Scripts/angularjs/validar_cnpj.js",
               "~/Scripts/angularjs/formata_decimal.js",
              // "~/Scripts/angularjs/jquery-ui.js",

              "~/Scripts/angularjs/bootstrap-datetimepicker.js",
             "~/Scripts/angularjs/bootstrap-datetimepicker.pt-BR.js",


                "~/Scripts/angularjs/angular-ui/select2.js",
                 "~/Scripts/angularjs/select2.min.js", 
              "~/Scripts/angularjs/bootstrap.js" 

                
           ));



            bundles.Add(new ScriptBundle("~/bundles/customJS").Include(
                  "~/Scripts/js/Module/moduleApp.js",
                  "~/Scripts/js/Factory/dataService.js",
                  "~/Scripts/js/Factory/authService.js",
                    "~/Scripts/js/Service/loading.js",
                     "~/Scripts/js/Service/modal.js" ,

                   "~/Scripts/js/Routers/appRoute.js",
  "~/Scripts/js/Directives/calendar.js",
   "~/Scripts/js/Directives/mascara.js",
 "~/Scripts/js/Directives/mask.js" ,
  "~/Scripts/js/Directives/autocomplete.js", 
   "~/Scripts/js/Directives/formatDate.js",
      "~/Scripts/js/Directives/paging.js", 
 

     

  "~/Scripts/js/Filter/filterDate.js" 
                     ));


            bundles.Add(new ScriptBundle("~/bundles/app").Include(

               "~/App/Inicial/Controller/IndexController.js" , 
                 "~/App/Morador/Controller/PesquisarMoradorController.js",
                  "~/App/Morador/Controller/CadastrarMoradorController.js",
                   "~/App/Visitante/Controller/PesquisarVisitanteController.js",
                  "~/App/Visitante/Controller/CadastrarVisitanteController.js",
                  "~/App/Visita/Controller/CadastrarVisitaMoradorController.js",
                  "~/App/Visita/Controller/PesquisarVisitaMoradorController.js"
                 
                    ));
        }
    }
}