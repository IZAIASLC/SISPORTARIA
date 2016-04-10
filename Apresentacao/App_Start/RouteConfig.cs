using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Apresentacao
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
             "Default",
             "{controller}/{action}/{identificador}",
             new { controller = "Home", action = "Index", identificador = UrlParameter.Optional }
         );



       //     routes.MapRoute(
       //"ListarExecucao",
       //"Execucao/Listar/{ano}/{superintendencia}",
       //new { controller = "Execucao", action = "Listar", ano = DateTime.Now.Year, superintendencia = 0 }

       //   );

       //     routes.MapRoute(
       //         "PaginacaoDefault",
       //         "Apresentacao/Listar/{indicePagina}/{tamanhoPagina}",
       //         new { controller = "Apresentacao", action = "Listar", indicePagina = 1, tamanhoPagina = 20 }
       //     );




       //     routes.MapRoute(
       //   "Programacao",
       //   "Programacao/Exibir/{ano}/{superintendencia}",
       //   new { controller = "Programacao", action = "Exibir", ano = DateTime.Now.Year, superintendencia = 0 }

       //      );

            
        }
    }
}