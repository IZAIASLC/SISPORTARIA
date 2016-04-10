using FluentNHibernate.Automapping;
using FluentNHibernate.Automapping.Alterations;
using SisPortaria.Modelo;
using System;
using System.Collections.Generic;


namespace AcessoDados.Mapeamento
{
    public class MoradorMappingOverride:IAutoMappingOverride<Morador>
    {
        public void Override(AutoMapping<Morador> mapping)
        {
            mapping.HasMany(morador => morador.Dependentes)
                .Table("Morador")
                .KeyColumn("ID_MORADOR")
                .ForeignKeyConstraintName("FK_DEPENDENTE_MORADOR")
                .Cascade.AllDeleteOrphan();
        }
    }
}
