import { Router } from "express";

import { addContato, consultarContatos, consultarContatosNome, consultarContatosFavoritos, consultarContatosData, alterarContato, deletarContato } from '../repository/agendaRepository.js';
const server=Router();

// Adicionar um contato
server.post('/contato', async (req,resp) =>{

    try {
        
        let favVerif=0;
        const contato=req.body;

        const resposta=await addContato(contato);

        if(!contato.nome) throw new Error('Nome não pode ser nulo');
        if(!contato.telefone) throw new Error('Telefone não pode ser nulo');
        if(!contato.email) throw new Error('Email não pode ser nulo');

            if(contato.favorito==false || contato.favorito==true) {

                favVerif=1;
            };
            if(contato.favVerif=0) throw new Error('Favorito não especificado');
            
        if(!contato.cadastro) throw new Error('Data não pode ser nula');

        resp.send(resposta);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        });
    }
});

// Buscar todos
server.get('/contato', async (req,resp) => {

    try {

        const resposta=await consultarContatos();
        resp.send(resposta);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        });
    }
});

// Busca por nome
server.get('/contato/busca', async (req,resp) => {

    try{

        const nome=req.query.nome;
        const resposta=await consultarContatosNome(nome);
        resp.send(resposta);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        });
    }
});

// Busca por favorito

server.get('/contato/favoritos', async (req,resp) => {

    try{

        const resposta=await consultarContatosFavoritos();
        resp.send(resposta);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        });
    }
});

// Busca por data
server.get('/contato/cadastro/:inicio/:fim', async (req,resp) => {

    try{

        const data1=req.params.inicio;
        const data2=req.params.fim;

        const resposta=await consultarContatosData(data1,data2);
        resp.send(resposta);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        })
    }
});

// Alterar um contato

server.put('/contato/:id', async (req,resp) =>{

    try{

        const {coluna,valor}=req.body;
        const id=req.params.id;

        const result=await alterarContato(coluna,valor,id);

        resp.send(`O valor da coluna ${coluna} foi alterado para ${valor} no registro ${id}`);
    }

    catch(err){
        resp.status(404).send({

        erro:err.message
    })};
});

server.delete('/contato/:id', async (req,resp) => {

    try{
        const idContato=req.params.id;

        const contatoDeletado=deletarContato(idContato);

        resp.send('Contato deletado');
    }
    
    catch(err){

        resp.status(404).send({

            erro:err.message
        });
    }
})
export default server;


