const connection = require('../bdCon/conx')

module.exports = function (app, prefix) {

    app.post(prefix + '/register_user', async (req, res) => {
        const {
            name,
            nick,
            password
        } = req.body

        let con = await connection.dbConnection();

        let sql = `INSERT INTO tbl_users (nameUser, nickUser, passwordUser) VALUES (?,?,?)`
        con.query(sql, [name, nick, password], function (err, result, fielsds) {
            if (err) {
                res.status(500).send({
                    status: false,
                    msg: 'Ha ocurrido un error ingresando el usuario',
                    error: err
                })
            } else {
                res.status(200).send({
                    status: true,
                    msg: 'Usuario registrado exitosamente',
                    insertId: result.insertId
                })
            }

        })


    })

    app.get(prefix + '/all', async(req, res) => {
        let con = await connection.dbConnection();
        let sql = `SELECT * FROM tbl_users`;
        con.query(sql, [], function(err, result){
            if(err){
                res.status(500).send({
                    status: false,
                    msg: 'Ha ocurrido un error listando los usuarios',
                    error: err
                })
            }else{
                res.status(200).send({
                    status: true,
                    result
                })
            }
        })
    })


    app.post(prefix + '/login', async(req, res) => {
        let con = await connection.dbConnection();

        let params = [ req.body.nick, req.body.password]

        let sql = `SELECT COUNT(*) as flag, idUsers FROM tbl_users WHERE nickUser = ? AND passwordUser = ?`

        con.query(sql, params, function(err, result){
            if(err){
                res.status(500).send({
                    status: false,
                    msg: 'Ha ocurrido un error',
                    error: err
                })
            }else{
                if(result[0].flag > 0){
                    res.status(200).send({
                        status: true,
                        msg: 'Acceso concedido',
                        user: result[0].idUsers
                    })
                }else{
                    res.status(200).send({
                        status: false,
                        msg: 'Por favor verifique sus datos',
                        result
                    })
                }
             
            }
        })
    })
}