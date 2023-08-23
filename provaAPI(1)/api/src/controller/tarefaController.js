import { addTarefa, selecionarTodos, selecionarFinalizados, alterarRegistro, deletarRegistro } from '../repository/tarefaRepository.js';
import { Router } from 'express';

const server=Router();

server.post('/tarefa', async (req,resp) => {

    try {

        const {tarefa,ordem,finalizacao}=req.body;

        const result=await addTarefa(tarefa,ordem,finalizacao);
        resp.send(result);
        
    }
    catch(err){
        resp.status(404).send({
            erro:'Erro ao adicionar tarefa'
        })
    }
});

server.put('/tarefa/:coluna', async (req, resp) => {

    try {
      const coluna = req.params.coluna;

      const {valor,registro} = req.body;

      const result = await alterarRegistro(coluna, valor, registro);

      resp.send(result);

    } catch (err) {
        
      resp.status(404).send({
        erro: 'Erro ao alterar o valor'
      });
    }
  });

server.delete('/tarefa', async (req,resp) => {

    try{

        const {id} = req.body;
        const result= await deletarRegistro(id);
        resp.send(result);
    }

    catch(err){

        resp.status(404).send({

            erro:"Erro ao deletar um registro"
        });
    }
});

server.get('/tarefa', async (req,resp) => {

    try{

        const result = await selecionarTodos();
        resp.send(result);
    }

    catch(err){

        resp.status(404).send({

            erro:'Erro ao chamar tarefas'
        })
    }
});

server.get('/tarefa/finalizados', async (req,resp) => {

    try{

        const result = await selecionarFinalizados();
        resp.send(result);
    }

    catch(err){

        resp.status(404).send({

            erro:'Erro ao verificar tarefas finalizadas'
        })
    }
});

export default server;