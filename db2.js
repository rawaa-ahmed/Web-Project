const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "astr0HERO1234_",
    database: "company_optimization",
    connectionLimit: 10

});
mysqlConnection.connect((err) => {

    if (!err)

        console.log('DB connection succeed.');



    else

        console.log('DB connection failed \n Error:' + JSON.stringify(err, undefined, 2));




});
module.exports = mysqlConnection
