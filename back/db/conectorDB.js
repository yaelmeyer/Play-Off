let mysql = require('mysql')
let util = require('util')

console.log('prueba '+process.env.MYSQL_HOST)

//no anda el env
// let pool = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_PASSWORD,
//     password: process.env.MYSQL_PASSWORD,
//     daabase: process.env.MYSQL_DB_NAME
// })

let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
})

pool.query = util.promisify(pool.query)

module.exports = pool