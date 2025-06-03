// docker mysql

const mysql = require('mysql2');
const connectionDB = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456789',
    database: 'DB0603V3'
});
// 確保 db.js 最後有加上 module.exports = connection;，這樣才能正確導出 connection 物件。
module.exports = connectionDB;