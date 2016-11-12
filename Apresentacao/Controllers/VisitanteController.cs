using Apresentacao.Utils;
using Incra.Estrutura.AcessoDados;
using Modelo.Dto;
using SisPortaria.Modelo;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace Apresentacao.Controllers
{

    public class VisitanteController : LargeJsonResult
    {
        private IRepositorio<Visitante> repositorioVisitante;

        public VisitanteController(IRepositorio<Visitante> repositorioVisitante)
        {
            this.repositorioVisitante = repositorioVisitante;
        }


        [HttpGet]
        public ActionResult ListarVisitantes()
        {
            var listaVisitanteAtual = repositorioVisitante.Consultar();
            var listaVisitante = new List<Visitante>();

            foreach (var visitante in listaVisitanteAtual)
            {
                var visitanteAtual = new Visitante();
                visitanteAtual.Identificador = visitante.Identificador;
                visitanteAtual.Nome = visitante.Nome;
                
                visitanteAtual.Identidade = visitante.Identidade;
                visitanteAtual.Sexo = visitante.Sexo;
                visitanteAtual.Foto = visitante.Foto;
                visitanteAtual.DataNascimento = visitante.DataNascimento;
                visitanteAtual.Estado = visitante.Estado;
                listaVisitante.Add(visitanteAtual);
            }

            return Json(listaVisitante, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult ListarVisitanteId(int identificador)
        {
            var visitanteAtual = repositorioVisitante.Consultar(identificador);

            var visitante = new Visitante();

            visitante.Identificador = visitanteAtual.Identificador;
            visitante.Nome = visitanteAtual.Nome;
           
            visitante.Identidade = visitanteAtual.Identidade;
            visitante.Foto = visitanteAtual.Foto;
            visitante.Sexo = visitanteAtual.Sexo;
            visitante.DataNascimento = visitanteAtual.DataNascimento;
            visitante.Estado = visitanteAtual.Estado;
            return this.retornarJson(visitante);
        }

        [HttpGet]
        public ActionResult ListarVisitante(string nome, string identidade)
        {
            var morador = repositorioVisitante.Listar().Where(x => x.Nome.Equals(nome) || x.Identidade.Equals(identidade)).ToList();

            return Json(morador, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public ActionResult Pesquisar(string nome, string identidade)
        {
            var listaVisitante = repositorioVisitante.Listar().ToList();

            var listaVisitanteDto = new List<VisitanteDto>();


            if (!string.IsNullOrWhiteSpace(nome) && nome != "undefined")
                listaVisitante = listaVisitante.Where(x => x.Nome.ToUpper().Contains(nome.ToUpper())).ToList();

            if (!string.IsNullOrWhiteSpace(identidade) && identidade != "undefined")
                listaVisitante = listaVisitante.Where(x => x.Identidade != null && x.Identidade.ToUpper().Contains(identidade.ToUpper())).ToList();



            foreach (var visitante in listaVisitante)
            {
                var visitanteAtual = new VisitanteDto();
                visitanteAtual.Identificador = visitante.Identificador;
                visitanteAtual.Nome = visitante.Nome;
                visitanteAtual.Identidade = visitante.Identidade;

                listaVisitanteDto.Add(visitanteAtual);
            }


            return Json(listaVisitanteDto, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
       [ValidateInput(false)]
        public void SalvarVisitante(Visitante visitante)
        {

            //foreach (string file in Request.Files)
            //{
            //    var fileContent = Request.Files[file];
            //    if (fileContent != null && fileContent.ContentLength > 0)
            //    {
            //        var inputStream = fileContent.InputStream;
            //        var fileName = Path.GetFileName(file);
            //        var path = Path.Combine(Server.MapPath("~/App_Data/Images"), fileName);
            //        using (var fileStream = System.IO.File.Create(path))
            //        {
            //            inputStream.CopyTo(fileStream);
            //        }
            //    }
            //}


           
            
            repositorioVisitante.Inserir(visitante);

        }


     
        byte[]  LoadFileBytes(string base64)
        {
            byte[] array = Encoding.ASCII.GetBytes(base64);

            return array;
        }


        [HttpPut]
        public void AtualizarVisitante(Visitante visitante)
        {
            var visitanteAtual = repositorioVisitante.Consultar(visitante.Identificador);
 
            visitanteAtual.Nome = visitante.Nome;
 
            visitanteAtual.Identidade = visitante.Identidade;
            visitanteAtual.Sexo = visitante.Sexo;
            visitanteAtual.Foto = visitante.Foto;
            visitanteAtual.Estado = visitante.Estado;
            visitanteAtual.DataNascimento = visitante.DataNascimento;
            repositorioVisitante.Atualizar(visitanteAtual);

        }

        //Verifica se o CPF já está cadastrado ao editar
        [HttpGet]
        public bool VerificarIdentidadeCadastrada(string parametro, int? identificador)
        {
            bool retorno = false;
            var resultado = new List<Visitante>();


            if (identificador.Value > 0)
            {

                resultado = repositorioVisitante.Pesquisar(c => c.Identidade.ToUpper().Contains(parametro.ToUpper()) && c.Identificador != identificador).ToList();
            }
            else
            {
                resultado = repositorioVisitante.Pesquisar(c => c.Identidade.ToUpper().Contains(parametro.ToUpper())).ToList();

            }



            if (resultado.Count() > 0)
                retorno = true;

            return retorno;

        }


        public ActionResult Index()
        {
            return View();
        }

    }
}
