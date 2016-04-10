/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2005                    */
/* Created on:     18/03/2016 14:37:10                          */
/*==============================================================*/


alter table DEPENDENTE
   drop constraint FK_DEPENDENTE_MORADOR
go

alter table VISITA_MORADOR
   drop constraint FK_VISITA_MORADOR
go

alter table VISITA_MORADOR
   drop constraint FK_VISITA_VISITANTE
go

if exists (select 1
            from  sysobjects
           where  id = object_id('DEPENDENTE')
            and   type = 'U')
   drop table DEPENDENTE
go

if exists (select 1
            from  sysobjects
           where  id = object_id('MORADOR')
            and   type = 'U')
   drop table MORADOR
go

if exists (select 1
            from  sysobjects
           where  id = object_id('VISITANTE')
            and   type = 'U')
   drop table VISITANTE
go

if exists (select 1
            from  sysobjects
           where  id = object_id('VISITA_MORADOR')
            and   type = 'U')
   drop table VISITA_MORADOR
go

/*==============================================================*/
/* Table: DEPENDENTE                                            */
/*==============================================================*/
create table DEPENDENTE (
   ID_DEPENDENTE        INT                  identity,
   ID_MORADOR           INT                  null,
   NOME                 VARCHAR(150)         null,
   constraint "coPKENDENTE_COLUNA(S)" primary key (ID_DEPENDENTE)
)
go

/*==============================================================*/
/* Table: MORADOR                                               */
/*==============================================================*/
create table MORADOR (
   ID_MORADOR           INT                  identity,
   NOME                 VARCHAR(150)         null,
   CPF                  CHAR(12)             null,
   IDENTIDADE           VARCHAR(50)          null,
   SEXO                 BIT                  null,
   ENDERECO             VARCHAR(150)         null,
   FOTO                 VARBINARY(MAX)       null,
   constraint "coPKADOR_COLUNA(S)" primary key (ID_MORADOR)
)
go

/*==============================================================*/
/* Table: VISITANTE                                             */
/*==============================================================*/
create table VISITANTE (
   ID_VISITANTE         INT                  identity,
   NOME                 VARCHAR(150)         null,
   CPF                  CHAR(12)             null,
   IDENTIDADE           VARCHAR(50)          null,
   FOTO                 VARBINARY(MAX)       null,
   SEXO                 BIT                  null,
   constraint "coPKITANTE_COLUNA(S)" primary key (ID_VISITANTE)
)
go

/*==============================================================*/
/* Table: VISITA_MORADOR                                        */
/*==============================================================*/
create table VISITA_MORADOR (
   ID_VISITA_MORADOR    INT                  identity,
   ID_MORADOR           INT                  null,
   ID_VISITANTE         INT                  null,
   ENTRADA              DATETIME             null,
   SAIDA                DATETIME             null,
   constraint "coPKITA_MORADOR_COLUNA(S)" primary key (ID_VISITA_MORADOR)
)
go

alter table DEPENDENTE
   add constraint FK_DEPENDENTE_MORADOR foreign key (ID_MORADOR)
      references MORADOR (ID_MORADOR)
go

alter table VISITA_MORADOR
   add constraint FK_VISITA_MORADOR foreign key (ID_MORADOR)
      references MORADOR (ID_MORADOR)
go

alter table VISITA_MORADOR
   add constraint FK_VISITA_VISITANTE foreign key (ID_VISITANTE)
      references VISITANTE (ID_VISITANTE)
go

