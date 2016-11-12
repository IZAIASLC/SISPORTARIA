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
                        "~/Scripts/jquery/jquery-{version}.js"
                        
                   //     "~/Scripts/MicrosoftAjax.js",
                    //    "~/Scripts/MicrosoftMvcAjax.js"
                        ));

                       bundles.Add(new ScriptBundle("~/bundles/sweetalert").Include(
                      "~/Scripts/sweetalert/sweetalert-dev.js"));

            bundles.Add(new ScriptBundle("~/bundles/materialize").Include(
                       "~/Scripts/materialize/materialize.js"

                  //     "~/Scripts/MicrosoftAjax.js",
                //    "~/Scripts/MicrosoftMvcAjax.js"
                       ));


 

                 //     "~/Scripts/MicrosoftAjax.js",
                //    "~/Scripts/MicrosoftMvcAjax.js"
              

         //   bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
            //            "~/Scripts/angularjs/jquery-ui-{version}.js"));



            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.unobtrusive*",
            //            "~/Scripts/angularjs/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
               "~/content/materialize/css/materialize.css",
                "~/content/sweetalert/sweetalert.css",

                  "~/content/materialize/font/material-icons.css",
                    "~/fonts/roboto/",

                     "~/content/ng-img-crop.css",
                 "~/content/Style-v2.css" ,
                  "~/content/simple-autocomplete.css" 
                //"~/Content/Site.css",
                //   "~/Content/jquery-ui.css",
                //    "~/Content/angular-ui.css",
                //     "~/Content/bootstrap-theme.css",
                //     "~/Content/angular-material.css",
                //     "~/Content/angular-material.layouts.css",
                //     // "~/Content/bootstrap.css",
                //   "~/Content/font-awesome.min.css",
                //      "~/Content/select2.css" 

                ));

            //bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
            //            "~/Content/themes/base/jquery.ui.core.css",
            //            "~/Content/themes/base/jquery.ui.resizable.css",
            //            "~/Content/themes/base/jquery.ui.selectable.css",
            //            "~/Content/themes/base/jquery.ui.accordion.css",
            //            "~/Content/themes/base/jquery.ui.autocomplete.css",
            //            "~/Content/themes/base/jquery.ui.button.css",
            //            "~/Content/themes/base/jquery.ui.dialog.css",
            //            "~/Content/themes/base/jquery.ui.slider.css",
            //            "~/Content/themes/base/jquery.ui.tabs.css",
            //            "~/Content/themes/base/jquery.ui.datepicker.css",
            //            "~/Content/themes/base/jquery.ui.progressbar.css",
            //            "~/Content/themes/base/jquery.ui.theme.css" ,
            //              "~/Content/bootstrap-datetimepicker.css" 
                        
                         
            //            ));

            
                    
           

            bundles.Add(new ScriptBundle("~/bundles/angularJS").Include(
           "~/Scripts/angular/angular.js",
           "~/Scripts/angular/angular-aria.js",
            "~/Scripts/angular/angular-messages.js",
           "~/Scripts/angular/angular-route.js",
           "~/Scripts/angular/angular-loader.js",
            "~/Scripts/angular/angular-resource.js",
             "~/Scripts/angular/angular-animate.js",
              "~/Scripts/angular/angular-local-storage.js",

               "~/Scripts/angular/angular-locale_pt-br.js",

               "~/Scripts/angular/angular-materialize.js",

              

               "~/Scripts/webcam.js",
                 "~/Scripts/ng-img-crop.js",

               //    "~/Scripts/angularjs/bootbox.js",
               "~/Scripts/projeto/apoio.js" ,
               "~/Scripts/projeto/json-date.js" ,
                 "~/Scripts/projeto/pickadate_pt_br.js" 

               


              // "~/Scripts/angularjs/jquery-ui.js",

           //   "~/Scripts/angularjs/bootstrap-datetimepicker.js",
           //  "~/Scripts/angularjs/bootstrap-datetimepicker.pt-BR.js",


            //    "~/Scripts/angularjs/angular-ui/select2.js",
             //    "~/Scripts/angularjs/select2.min.js" 
                
           //  "~/Scripts/angularjs/bootstrap.js" 


           ));



            bundles.Add(new ScriptBundle("~/bundles/customJS").Include(
                  "~/Scripts/projeto/Module/moduleApp.js",
                  "~/Scripts/projeto/Factory/dataService.js",
                  "~/Scripts/projeto/Factory/authService.js",
                    "~/Scripts/projeto/Service/loading.js",
                     "~/Scripts/projeto/Service/modal.js",

                   "~/Scripts/projeto/Routers/appRoute.js",
  "~/Scripts/projeto/Directives/calendar.js",
   "~/Scripts/projeto/Directives/mascara.js",
 "~/Scripts/projeto/Directives/ngMask.js",

  "~/Scripts/projeto/Directives/simple-autocomplete.js",

 //"~/Scripts/projeto/Directives/webcam.js",

  "~/Scripts/projeto/Directives/inputfield.js",


   "~/Scripts/projeto/Directives/formatDate.js",
      "~/Scripts/projeto/Directives/paging.js",




  "~/Scripts/projeto/Filter/filterDate.js" 
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