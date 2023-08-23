import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({

    host:process.env.BD_HOST,
    user:process.env.BD_USER,
    password:process.env.BD_PASSWORD,
    database:process.env.BD_DATABASE
});

console.log(`Banco de dados conectado no arquivo "./src/repository/connection.js"!`);

export {connection};