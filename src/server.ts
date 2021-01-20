import express from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


// Rotas Endereço da Aplicação
//Metodos HTTP GET,POST, PUT, DELETE

// Corpo (request Body): 
// Dados para criação ou atualização de uma aplicacao
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenaçõa