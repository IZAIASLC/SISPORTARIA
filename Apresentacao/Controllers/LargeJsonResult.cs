using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace Apresentacao.Controllers
{
    public class LargeJsonResult : Controller
    {
        JavaScriptSerializer jss = new JavaScriptSerializer();

        public JsonResult retornarJson<T>(T result)
        {
 
            var resultado = Json(result, JsonRequestBehavior.AllowGet);
            resultado.MaxJsonLength = int.MaxValue;
            return resultado;
        }
    }
}
     