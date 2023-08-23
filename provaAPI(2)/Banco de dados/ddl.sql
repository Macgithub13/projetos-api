show databases;
create database infob_db;
use mybd_db;
use infob_db;

show tables;
create table TB_AGENDA(

ID_AGENDA		INT primary key auto_increment NOT NULL,
NM_CONTATO		VARCHAR(200) NOT NULL,
DS_TELEFONE		VARCHAR(200) NOT NULL,
DS_EMAIL        VARCHAR(200) NOT NULL,
BT_FAVORITO     boolean NOT NULL,
DT_CADASTRO		DATE NOT NULL
);

