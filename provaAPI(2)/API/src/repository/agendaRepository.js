import { connection } from './connection.js';

export async function addContato(contato){

    let command=`INSERT INTO TB_AGENDA (NM_CONTATO,DS_TELEFONE,DS_EMAIL,BT_FAVORITO,DT_CADASTRO)
                VALUES(?,?,?,?,?)`;

    let [resp]= await connection.query(command, [contato.nome,contato.telefone,contato.email,contato.favorito,contato.cadastro]);
    contato.id = resp.insertId;
    return contato;
}

export async function consultarContatos(){

    let command=`Select * from tb_agenda`;

    let [resp]= await connection.query(command,[]);
    return(resp);
}

export async function consultarContatosNome(nome){

    let comando=`Select * 
                from tb_agenda
                WHERE NM_CONTATO like ?`;

    let [resp]=await connection.query(comando, [`%${nome}%`]);

    return resp;
}

export async function consultarContatosFavoritos(){

    let command=`Select * from tb_agenda
                WHERE BT_FAVORITO=1`;

    let [resp]=await connection.query(command, []);
    return (resp);
}

export async function consultarContatosData(data1,data2){

    let command=`Select * from tb_agenda
    WHERE DT_CADASTRO between ? and ?`;

    let [resp]=await connection.query(command, [data1,data2]);
    return(resp);
}

export async function alterarContato(coluna,valor,id){

    let command=`UPDATE TB_AGENDA
                 SET ${coluna}=?
                 Where ID_AGENDA=?`;

    let [resp]=await connection.query(command, [valor,id]);
    return resp;
}

export async function deletarContato(id){

    let command=`DELETE FROM TB_AGENDA
                 WHERE ID_AGENDA=?`

    let [resp]= await connection.query(command, [id]);
    return resp;
}