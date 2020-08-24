var mysql = require('mysql');

let credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tareas_evo',
    port: 3306
}

module.exports.dbConnection = async function () {
    return new Promise((resolve, reject) => {
        let con = mysql.createConnection(credentials)
        con.connect(function (err) {
            if (err) {
                reject(err)
            } else {
                resolve(con)
            }
        })
    })
}