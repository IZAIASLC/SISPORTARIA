﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Apresentacao.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
    public const string PATH_SRC = @"~/Scripts/app/";
        public ActionResult Index()
        {
        // paginação http://begriffs.com/angular-paginate-anything/?page=2&perPage=5
           
            return View();
        }

       

    }
}
