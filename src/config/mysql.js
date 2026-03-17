const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'loja_de_carros',
    port: 3307
});

module.exports = pool;



// conectar no mysql
// para achar o nome do container use docke ps
// dock exec -it nome do container bash
// vai entrar no root do container
// mysql -u root -p
// quando vc der enter, vai colocar a senha que é o root
// entrar no mysql e dar o comando show databases;
// vc vai ver cinco bancos, e o seu do do docker-compose criado: loja_de _carros



// docker ps
// docker exec mysql_fullstack mysql -u root -p'root' -e "SHOW DATABASES;"
// docker exec mysql_fullstack mysql -u root -p'root' loja_de_carros -e "SHOW TABLES; SELECT * FROM carros;"