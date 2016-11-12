using Apresentacao.Utils;
using Incra.Estrutura.AcessoDados;
using SisPortaria.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Apresentacao.Utils;
using System.Collections;
using Modelo.Dto;
namespace Apresentacao.Controllers
{

    public class EstadoController : Controller
    {
        private IRepositorio<Estado> repositorioEstado;

        public EstadoController(IRepositorio<Estado> repositorioEstado)
        {

            this.repositorioEstado = repositorioEstado;

        }
        

        [HttpGet]
        public ActionResult ListarEstados()
        {
            var listaEstados = repositorioEstado.Consultar().OrderBy(x=>x.SiglaEstado);

            var retornoEstados = new List<EstadoDto>();
            foreach (var estado in listaEstados)
            {
                     var estadoDto = new EstadoDto();
                estadoDto.Identificador = estado.Identificador;
                estadoDto.Sigla = estado.SiglaEstado;

                retornoEstados.Add(estadoDto);
            }
 
            return Json(retornoEstados, JsonRequestBehavior.AllowGet);
        }

        
    }
}
