import { connection } from "./connection.js";

export async function addTarefa(tarefa,ordem,finalizacao){

    let command=`
        INSERT INTO TB_TAREFA(DS_TAREFA,NR_ORDEM,BT_FINALIZADO,DT_CADASTRO)
        VALUES (?,?,?,now())`

    let [resp]=await connection.query(command,[tarefa,ordem,finalizacao]);
    
    return (resp);
}

export async function selecionarTodos(){

    let command=`select * from tb_tarefa`;

    let [resp]=await connection.query(command);
    return (resp);
}

export async function selecionarFinalizados(){

    let command=`select * from tb_tarefa
                WHERE BT_FINALIZADO=1`;

    let [resp]=await connection.query(command);
    return (resp);
}

export async function alterarRegistro(coluna,valor,registro){

    let command=`UPDATE TB_TAREFA
                Set ${coluna}=?
                WHERE ID_TAREFA=?`;

    let [resp]=await connection.query(command, [valor,registro]);
    return (resp);
}

export async function deletarRegistro(id){

    let command=`
    
    DELETE from TB_TAREFA
    WHERE ID_TAREFA=?`;

    let [resp] = await connection.query(command, [id]);
    return (resp);
}

