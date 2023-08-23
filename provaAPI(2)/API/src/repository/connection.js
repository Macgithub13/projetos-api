import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({

    host:process.env.BD_HOST,
    user:process.env.BD_USER,
    password:process.env.BD_PASSWORD,
    database:process.env.BD_DATABASE
});

console.log('Conexão feita');

export {connection};