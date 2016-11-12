using Incra.Estrutura.AcessoDados;
using Modelo.Dto;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using SisPortaria.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace Apresentacao.Controllers
{

    public class VisitaMoradorController : Controller
    {
        private IRepositorio<VisitaMorador> repositorioVisitaMorador;


        public VisitaMoradorController(IRepositorio<VisitaMorador> repositorioVisitaMorador)
        {
            this.repositorioVisitaMorador = repositorioVisitaMorador;
        }

        [HttpGet]
        public ActionResult ListarVisitasMorador()
        {
            var listaVisitasMoradorAtual = repositorioVisitaMorador.Consultar().OrderByDescending(i => i.Identificador);

            var listaVisitasMorador = new List<VisitaMoradorDto>();

            foreach (var visitaMorador in listaVisitasMoradorAtual)
            {
                VisitaMoradorDto visitaMoradorDto = new VisitaMoradorDto();
                visitaMoradorDto.Identificador = visitaMorador.Identificador;
                visitaMoradorDto.Entrada = visitaMorador.Entrada;
                visitaMoradorDto.Saida = visitaMorador.Saida;
                visitaMoradorDto.Morador = new MoradorDto();
                visitaMoradorDto.Morador.Identificador = visitaMorador.Morador.Identificador;
                visitaMoradorDto.Morador.Nome = visitaMorador.Morador.Nome;
                visitaMoradorDto.Morador.Endereco = visitaMorador.Morador.Endereco;


               // = visitaMorador.Morador;
                visitaMoradorDto.Visitante = new VisitanteDto();
                visitaMoradorDto.Visitante.Identificador = visitaMorador.Visitante.Identificador;
                visitaMoradorDto.Visitante.Nome = visitaMorador.Visitante.Nome;
                visitaMoradorDto.Visitante.Identidade = visitaMorador.Visitante.Identidade;

                listaVisitasMorador.Add(visitaMoradorDto);

            }


            return Json(listaVisitasMorador, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult ListarVisitaMorador(int identificador)
        {
            var visitaMoradorAtual = repositorioVisitaMorador.Consultar(identificador);


            VisitaMoradorDto visitaMoradorDto = new VisitaMoradorDto();
            visitaMoradorDto.Identificador = visitaMoradorAtual.Identificador;
            visitaMoradorDto.Entrada = visitaMoradorAtual.Entrada;
            visitaMoradorDto.Saida = visitaMoradorAtual.Saida;
            visitaMoradorDto.Morador = new MoradorDto();
            visitaMoradorDto.Morador.Identificador = visitaMoradorAtual.Morador.Identificador;
            visitaMoradorDto.Morador.Nome = visitaMoradorAtual.Morador.Nome;
            visitaMoradorDto.Morador.Endereco = visitaMoradorAtual.Morador.Endereco;


            // = visitaMorador.Morador;
            visitaMoradorDto.Visitante = new VisitanteDto();
            visitaMoradorDto.Visitante.Identificador = visitaMoradorAtual.Visitante.Identificador;
            visitaMoradorDto.Visitante.Nome = visitaMoradorAtual.Visitante.Nome;
            visitaMoradorDto.Visitante.Identidade = visitaMoradorAtual.Visitante.Identidade;


            return Json(visitaMoradorDto, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void SalvarVisitaMorador(VisitaMorador visitaMorador)
        {
            repositorioVisitaMorador.Inserir(visitaMorador);
        }


        [HttpPut]
        public void AtualizarVisitaMorador(VisitaMorador visitaMorador)
        {
           var visitaMoradorAtual = repositorioVisitaMorador.Consultar(visitaMorador.Identificador);

           visitaMoradorAtual.Entrada = visitaMorador.Entrada;
           visitaMoradorAtual.Saida = visitaMorador.Saida;

           repositorioVisitaMorador.Atualizar(visitaMoradorAtual);
        }

    }
}
