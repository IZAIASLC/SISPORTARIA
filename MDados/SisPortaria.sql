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



if exists (select 1
            from  sysobjects
           where  id = object_id('ESTADO')
            and   type = 'U')
   drop table ESTADO
go

/*==============================================================*/
/* Table: ESTADOS                                            */
/*==============================================================*/
create table ESTADO (
ID_ESTADO              INT              not null,
SIGLA_ESTADO		   CHAR(2)          not null,
NOME_ESTADO            VARCHAR(30)      not null,
constraint "coPKESTADO_COLUNA(S)" primary key (ID_ESTADO)
  )
go


/*==============================================================*/
/* Table: CARGO ESTADOS                                            */
/*==============================================================*/

 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(12,'AC','Acre');  
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(27,'AL','Alagoas');  
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(13,'AM','Amazonas');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(16,'AP','Amapá');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(29,'BA','Bahia');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(23,'CE','Ceará');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(53,'DF','Distrito Federal');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(32,'ES','Espírito Santo');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(52,'GO','Goiás');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(21,'MA','Maranhão');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(31,'MG','Minas Gerais');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(50,'MS','Mato Grosso do Sul');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(51,'MT','Mato Grosso');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(15,'PA','Pará');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(25,'PB','Paraíba');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(26,'PE','Pernambuco');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(22,'PI','Piauí');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(41,'PR','Paraná');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(33,'RJ','Rio de Janeiro');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(24,'RN','Rio Grande do Norte');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(11,'RO','Rondônia');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(14,'RR','Roraima');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(43,'RS','Rio Grande do Sul');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(42,'SC','Santa Catarina');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(28,'SE','Sergipe');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(35,'SP','São Paulo');
 Insert Into ESTADO (ID_ESTADO,SIGLA_ESTADO,NOME_ESTADO ) Values(17,'TO','Tocantins');

 

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
   NOME                 VARCHAR(150)         not null,
   IDENTIDADE           VARCHAR(50)          not null,
   ID_ESTADO       INT                        not null,
   SEXO                 BIT                  not null,
   ENDERECO             VARCHAR(150)         not null,
   DATA_NASCIMENTO      DATETIME			 not null,
   FOTO                 VARBINARY(MAX)       null,
   constraint "coPKADOR_COLUNA(S)" primary key (ID_MORADOR)
)
go



/*==============================================================*/
/* Table: VISITANTE                                             */
/*==============================================================*/
create table VISITANTE (
   ID_VISITANTE         INT                  identity,
   NOME                 VARCHAR(150)         not null,
   IDENTIDADE           VARCHAR(50)          not null,
   ID_ESTADO        INT					 null,
   FOTO                 VARBINARY(MAX)       null,
   SEXO                 BIT                  not null,
   DATA_NASCIMENTO      DATETIME             not null,
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
   PLACA_VEICULO	    CHAR(10)             null
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

alter table MORADOR
   add constraint FK_ESTADO_MORADOR foreign key (ID_ESTADO)
      references ESTADOS (ID_ESTADO)
go

alter table VISITANTE
   add constraint FK_ESTADO_VISITANTE foreign key (ID_ESTADO)
      references ESTADOS (ID_ESTADO)
go
