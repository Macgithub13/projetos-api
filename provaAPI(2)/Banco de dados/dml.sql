INSERT INTO TB_AGENDA (NM_CONTATO,DS_TELEFONE,DS_EMAIL,BT_FAVORITO,DT_CADASTRO)
            values(?,?,?,?,?);

Select * from tb_agenda;

Select * from tb_agenda
WHERE NM_CONTATO=?;

Select * from tb_agenda
WHERE BT_FAVORITO=1;

Select * from tb_agenda
WHERE DT_CADASTRO between "?" and "?";

UPDATE TB_AGENDA
SET NM_CONTATO='?'
Where ID_AGENDA=?;

DELETE FROM TB_AGENDA
WHERE ID_AGENDA=2;