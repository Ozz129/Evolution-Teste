const connection = require('../bdCon/conx')

module.exports = function (app, prefix) {

    app.post(prefix + '/create_task', async(req, res) => {
        let con = await connection.dbConnection();

        let sql =  `INSERT INTO tbl_tasks (nameTask, priorityTask, expirationTask, descriptionTask, userTask) VALUES (?,?,?,?,?)` 
        let params = [req.body.name, req.body.priority, req.body.expiration, req.body.description, req.body.user]

        con.query(sql, params, function(err, result){
            if(err){
                res.status(500).send({
                    status:false,
                    msg: 'Ha ocurrido un error almacenando la tarea',
                    error:err
                })
            }else{
                res.status(200).send({
                    status: true,
                    msg: 'Tarea creada exitosamente',
                    tarea: result.insertIc
                })
            }
        })
    
    })
    app.get(prefix + '/get_all/:id', async(req, res) => {
        let con = await connection.dbConnection();

        let sql = `SELECT * FROM tbl_tasks WHERE userTask = ? AND status = 'A' `

        con.query(sql, [req.params.id], function(err, result){
            if(err){
                res.status(500).send({
                    status: false,
                    msg:'Ha ocurrido un error listando las tareas',
                    error: err
                })
            }else{
                res.status(200).send({
                    status: true,
                    msg: 'Consulta exitosa',
                    result
                })
            }
        })
    })

    app.delete(prefix + '/delete/:id', async (req, res) => {
        let con = await connection.dbConnection();
        
        let sql = `UPDATE tbl_tasks SET status = 'I' WHERE idTask = ?`

        con.query(sql, [req.params.id], function(err, result){
            if(err){
                res.status(500).send({
                    status: false,
                    msg: 'Ocurrio un error eliminando la tarea',
                    error: err
                })
            }else{
                res.status(200).send({
                    status: true,
                    msg: 'Tarea eliminada'
                })
            }
        })

    })
}