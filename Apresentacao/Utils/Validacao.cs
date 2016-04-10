using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apresentacao.Utils
{
    public static class Validacao
    {

        public static string RemoverCaracter(string cpf)
        {
            string cpfSemCaracter = cpf.Replace(".", "").Replace(",", "").Replace("-", "");

            return cpfSemCaracter;

        }

        public static string RemoverCaracterCnpj(string cnpj)
        {
            string cpfSemCaracter = cnpj.Replace(".", "").Replace("/", "").Replace("-", "");

            return cpfSemCaracter;

        }

        public static string FormatarCnpj(string cnpj)
        {

            return Convert.ToUInt64(cnpj).ToString(@"00\.000\.000\/0000\-00");
        }

        public static string FormatarCPF(string cpf)
        {

            return Convert.ToUInt64(cpf).ToString(@"000\.000\.000\-00");
        }


    }
}