using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Incra.Estrutura.AcessoDados;
using Incra.Estrutura.Web.Mvc;
using Microsoft.Practices.Unity;
using SisPortaria.AcessoDados;
using Newtonsoft.Json.Converters;


namespace Apresentacao
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

           // WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            AuthConfig.RegisterAuth();


           
           // GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.Converters.Add(
           //new IsoDateTimeConverter { DateTimeFormat = "dd/MM/yyyy" });

           // GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.Culture = System.Globalization.CultureInfo.GetCultureInfo("pt-BR");

            
          
            

            InicializarConteiner();
        }

        private static void InicializarConteiner()
        {
            IUnityContainer conteiner = new UnityContainer();


            conteiner.RegisterInstance<IProvedor>(new Provedor());
            conteiner.RegisterType<IPersistencia, Persistencia>(new HttpContextLifetimeManager<IPersistencia>());
            conteiner.RegisterType(typeof(IRepositorio<>), typeof(Repositorio<>));


            conteiner.RegisterType<IVisitanteAcessoDados, VisitanteAcessoDados>();


            DependencyResolver.SetResolver(new UnityDependencyResolver(conteiner));
        }
    }
}