const connection = require("../../database");
remove_user = function (req, res) {
  console.log(req.body);
  connection.connect(function (error) {
    if (error) throw error;

    var sql = `delete from users where username=?;`;
    connection.query(sql, [req.body.username], function (error, result) {
      if (error) throw error;
      // res.send('User signup'+result.insertId);
      res.send(result);
    });
  });
};
authorize = function (req, res) {
  connection.connect(function (error) {
    console.log(req.body);
    if (error) throw error;

    var sql = `select * from unauthorized_users where username=?;`;
    connection.query(sql, [req.body.username], function (error, result) {
      if (error) throw error;
      // // res.send('User signup'+result.insertId);
      // res.send(result);
      var user = [
        result[0].username,
        result[0].firstname,
        result[0].lastname,
        result[0].email,
        result[0].password,
        result[0].gender,
        result[0].nationality,
        result[0].birthdate,
        result[0].userRole,
      ];
      console.log(user);
      var sql3 = `delete from unauthorized_users where username=?;`;
      connection.query(sql3, [req.body.username], function (error, result) {
        if (error) throw error;
      });
      var sql2 = `insert into users (username,firstname,lastname,email,password,gender,nationality,birthdate,userRole) VALUES (?);`;
      connection.query(sql2, [user], function (error, result) {
        if (error) throw error;
        // // res.send('User signup'+result.insertId);
        res.send(result);
      });
    });
  });
};
unauthorized_users = function (req, res) {
  console.log(1);
  connection.query(`select * from unauthorized_users`, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      //console.log(rows)
      res.send(rows);
    }
  });
};
module.exports = { authorize, remove_user, unauthorized_users };
