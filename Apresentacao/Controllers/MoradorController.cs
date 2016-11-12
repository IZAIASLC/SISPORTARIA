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
namespace Apresentacao.Controllers
{

    public class MoradorController : Controller
    {
        private IRepositorio<Morador> repositorioMorador;
        private IRepositorio<Dependente> repositorioDependente;

        public MoradorController(IRepositorio<Morador> repositorioMorador, IRepositorio<Dependente> repositorioDependente)
        {

            this.repositorioMorador = repositorioMorador;
            this.repositorioDependente = repositorioDependente;
 
        }
        

        [HttpGet]
        public ActionResult ListarMoradores()
        {
            var listaMorador = repositorioMorador.Consultar();

            var listaMoradorDto = new List<MoradorDto>();

            foreach (var morador in listaMorador)
            {
                MoradorDto moradorDto = new MoradorDto();

                moradorDto.Identificador = morador.Identificador;
                moradorDto.Nome = morador.Nome;
                
                moradorDto.Identidade = morador.Identidade;
                moradorDto.Sexo = morador.Sexo;
                moradorDto.Endereco = morador.Endereco;
                moradorDto.Foto = morador.Foto;
                moradorDto.Estado = morador.Estado;
                moradorDto.DataNascimento = morador.DataNascimento;
                moradorDto.Dependentes = new List<DependenteDto>();

                foreach (var dependente in morador.Dependentes)
                {
                    DependenteDto dependenteDto = new DependenteDto();

                    dependenteDto.Identificador = dependente.Identificador;
                    dependenteDto.Nome = dependente.Nome;

                    dependenteDto.Morador = dependente.Morador.Identificador;

                    moradorDto.Dependentes.Add(dependenteDto);

                }

                listaMoradorDto.Add(moradorDto);

            }


            return Json(listaMoradorDto, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult ListarMorador(int identificador)
        {
            var morador = repositorioMorador.Consultar(identificador);


            MoradorDto moradorDto = new MoradorDto();

            moradorDto.Identificador = morador.Identificador;
            moradorDto.Nome = morador.Nome;
            
            moradorDto.Identidade = morador.Identidade;
            moradorDto.Sexo = morador.Sexo;
            moradorDto.Endereco = morador.Endereco;
            moradorDto.Foto = morador.Foto;
            moradorDto.Estado = morador.Estado;
            moradorDto.DataNascimento = morador.DataNascimento;
            moradorDto.Dependentes = new List<DependenteDto>();

            foreach (var dependente in morador.Dependentes)
            {
                DependenteDto dependenteDto = new DependenteDto();

                dependenteDto.Identificador = dependente.Identificador;
                dependenteDto.Nome = dependente.Nome;

                dependenteDto.Morador = dependente.Morador.Identificador;

                moradorDto.Dependentes.Add(dependenteDto);

            }


            return Json(moradorDto, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult Pesquisar(string nome, string endereco,int? page, int? pageSize)
        {
            var listaMorador = repositorioMorador.Listar().ToList();

            var listaMoradorDto = new List<MoradorDto>();

   
            if (!string.IsNullOrWhiteSpace(nome) && nome !="undefined")
                listaMorador = listaMorador.Where(x => x.Nome.ToUpper().Contains(nome.ToUpper())).ToList();

            if (!string.IsNullOrWhiteSpace(endereco) && endereco != "undefined")
                listaMorador = listaMorador.Where(x => x.Endereco != null && x.Endereco.ToUpper().Contains(endereco.ToUpper())).ToList();
          


            foreach (var morador in listaMorador)
            {
               var moradorAtual = new MoradorDto();
               moradorAtual.Identificador = morador.Identificador;
               moradorAtual.Nome = morador.Nome;
               moradorAtual.Endereco = morador.Endereco;

               listaMoradorDto.Add(moradorAtual);
            }

            var currPage = page.GetValueOrDefault(0);
            var currPageSize = pageSize.GetValueOrDefault(10);

            var totalCount = listaMoradorDto.Count();

            var paged = listaMoradorDto.Skip(currPage * currPageSize)
                               .Take(currPageSize)
                               .ToArray();




            var PagedCollection = new PagedCollection<MoradorDto>()
            {

                   Page = currPage,
                   TotalCount = totalCount,
                   TotalPages = (int)Math.Ceiling((decimal)totalCount / currPageSize),
                   Items =  paged

            };


            return Json(PagedCollection, JsonRequestBehavior.AllowGet);
            
        }
        

        [HttpPost]
        public void SalvarMorador(Morador morador)
        {
          
           

            repositorioMorador.Inserir(morador);

        }

        [HttpPut]
        public void AtualizarMorador(Morador morador)
        {
            var moradorAtual = repositorioMorador.Consultar(morador.Identificador);

            moradorAtual.Nome = morador.Nome.ToUpper();
            
            moradorAtual.Identidade = morador.Identidade;
            moradorAtual.Sexo = morador.Sexo;
            moradorAtual.Endereco = morador.Endereco;
            moradorAtual.Foto = morador.Foto;

            moradorAtual.Estado = morador.Estado;
            moradorAtual.DataNascimento = morador.DataNascimento;

            var listaDependenteRemover = new List<Dependente>();
            var listaDependenteAdicionar = new List<Dependente>();
            var listaDependenteAtualizar = new List<Dependente>();

            //Percorre para remover
            foreach (var dependente in moradorAtual.Dependentes)
            {
                if (morador.Dependentes != null)
                {
                    if (!morador.Dependentes.Contains(dependente))
                        listaDependenteRemover.Add(dependente);
                }
                else
                {
                    listaDependenteRemover.Add(dependente);
                }

            }

            //Possui depedente
            if (morador.Dependentes != null)
            {
                //Percorre para adicionar
                foreach (var dependente in morador.Dependentes)
                {
                    if (!moradorAtual.Dependentes.Contains(dependente))
                        listaDependenteAdicionar.Add(dependente);
                }
            }

            //Adicionar dependente
            foreach (var dependente in listaDependenteAdicionar)
            {
                moradorAtual.Dependentes.Add(dependente);
            }

            //Remover dependente
            foreach (var dependente in listaDependenteRemover)
            {
                moradorAtual.Dependentes.Remove(dependente);
            }


            //Percorre para atualizar os dados
            foreach (var dependente in moradorAtual.Dependentes)
            {
                var dependenteFormulario = morador.Dependentes.Where(d => d.Identificador == dependente.Identificador).FirstOrDefault();
                dependente.Nome = dependenteFormulario.Nome;

            }

            repositorioMorador.Atualizar(moradorAtual);

        }


        //Verifica se o CPF já está cadastrado ao editar
        [HttpGet]
        public bool VerificarIdentidadeCadastrada(string parametro, int? identificador)
        {
            bool retorno = false;
            var resultado = new List<Morador>();


            if (identificador.Value > 0)
            {
              
                resultado = repositorioMorador.Pesquisar(c => c.Identidade.ToUpper().Contains(parametro.ToUpper()) && c.Identificador != identificador).ToList();
            }
            else
            {
                  resultado = repositorioMorador.Pesquisar(c => c.Identidade.ToUpper().Contains(parametro.ToUpper())).ToList();

            }
            


            if (resultado.Count() > 0)
                retorno = true;

            return retorno;

        }
    }
}
