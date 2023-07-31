const connection = require("../../database");
const crypto = require("crypto");
const date = require("date-and-time");
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString("hex");
}

signup = function (req, res) {
  // console.log(req.body)
  var username = req.body.username;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  // var password = encrypt(req.body.password);
  var password = req.body.password;
  var gender = req.body.gender;
  var nationality = req.body.nationality;
  var birthdate = req.body.birthdate;
  var userRole = req.body.userRole;
  var values = [
    username,
    firstname,
    lastname,
    email,
    password,
    gender,
    nationality,
    birthdate,
    userRole,
  ];
  connection.connect(function (error) {
    if (error) throw error;
    var sql = `select username from unauthorized_users where username=?;`;
    connection.query(sql, [username], function (error, result) {
      if (error) throw error;
      if (result.length == 0) {
        sql = `select username from unauthorized_users where username=?;`;
        connection.query(sql, [username], function (error, result) {
          if (error) throw error;
          if (result.length == 0) {
            sql =
              `INSERT INTO unauthorized_users(username,firstname,lastname,email,password,gender,nationality,birthdate,userRole) VALUES (` +
              connection.escape(values) +
              `);`;
            connection.query(sql, function (error, result) {
              if (error) throw error;
              // res.send('User signup'+result.insertId);
              res.send(result);
            });
          } else res.send("username already used");
        });
      } else res.send("username already used");
    });
  });
};
user = function (req, res) {
  // console.log(req.body)
  // var username = req.body.username;
  // var password = encrypt(req.body.password);
  // console.log(username,password);
  // // var userRole = req.body.userRole;
  connection.connect(function (error) {
    if (error) throw error;
    var sql = `select * from users where username=?;`;
    connection.query(sql, [req.body.username], function (error, result) {
      if (error) throw error;
      // res.send('User signup'+result.insertId);
      res.send(result);
      console.log(result);
    });
  });
};
signin = function (req, res) {
  // console.log(req.body)
  var username = req.body.username;
  // var password = encrypt(req.body.password);
  var password = req.body.password;
  console.log(username, password);
  // var userRole = req.body.userRole;
  connection.connect(function (error) {
    if (error) throw error;
    var sql = `select * from users where username=? and password=?;`;
    connection.query(sql, [username, password], function (error, result) {
      if (error) throw error;
      // res.send('User signup'+result.insertId);
      res.send(result);
      console.log(result);
    });
  });
};
reserve = function (req, res) {
  //console.log(req)
  console.log(req.body);
  connection.connect(function (error) {
    if (error) throw error;
    var sql = `select seat from reservation where matchid=? and seat=?;`;
    connection.query(
      sql,
      [req.body.matchid, req.body.seat],
      function (error, result) {
        if (error) throw error;
        console.log(result);
        if (result.length == 0) {
          var values = [req.body.username, req.body.matchid, req.body.seat];

          var sql2 =
            "insert into reservation(username,matchid, seat) values(" +
            connection.escape(values) +
            ");";
          connection.query(sql2, function (error, result) {
            if (error) throw error;
            // // res.send('User signup'+result.insertId);
            res.send(result);
          });
        } else {
          res.send("not_available");
        }
      }
    );
  });
};
cancel_reservation = function (req, res) {
  // console.log(req)
  connection.connect(function (error) {
    if (error) throw error;
    var sql = `select matchtime from matches where id=?;`;
    connection.query(sql, [req.body.matchid], function (error, result) {
      if (error) throw error;
      const now = new Date();
      console.log(now, result[0].matchtime);
      if (date.subtract(result[0].matchtime, now).toDays() >= 3) {
        sql = `delete from reservation where username=? and matchid=? and seat=?;`;
        connection.query(
          sql,
          [req.body.username, req.body.matchid, req.body.seat],
          function (error, result) {
            if (error) throw error;
            res.send(result);
          }
        );
      } else {
        res.send("cannot_cancel!");
      }
    });
  });
};
match = function (req, res) {
  console.log(req.body);
  connection.connect(function (error) {
    if (error) throw error;

    var sql = `select * from matches where id= ?;`;
    connection.query(sql, [req.body.matchid], function (error, result) {
      if (error) throw error;
      // res.send('User signup'+result.insertId);
      console.log(result);
      res.send(result);
    });
  });
};
users = function (req, res) {
  console.log(req.body);
  connection.connect(function (error) {
    if (error) throw error;

    var sql = `select * from users`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      // res.send('User signup'+result.insertId);
      console.log(result);
      res.send(result);
    });
  });
};
view_matches = function (req, res) {
  console.log(req);
  connection.connect(function (error) {
    if (error) throw error;

    var sql = `select * from matches`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      // res.send('User signup'+result.insertId);
      res.send(result);
    });
  });
};
stadiums = function (req, res) {
  console.log(req);
  connection.connect(function (error) {
    if (error) throw error;

    var sql = `select * from stadiums`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      // res.send('User signup'+result.insertId);
      res.send(result);
    });
  });
};
match_seats = function (req, res) {
  connection.connect(function (error) {
    if (error) throw error;

    var sql =
      `select seat from reservation where matchid=` +
      connection.escape(req.body.matchid) +
      `;`;
    connection.query(sql, function (error, result) {
      if (error) throw error;

      // res.send('User signup'+result.insertId);
      res.send(result);
    });
  });
};
edit_user = function (req, res) {
  console.log(req.body);
  connection.connect(function (error) {
    if (error) throw error;
    var sql = `select * from users where username=?;`;
    connection.query(sql, [req.query.username], function (error, result) {
      if (error) throw error;
      var values = result[0];
      var firstname =
        req.body.firstname !== undefined
          ? req.body.firstname
          : values.firstname;
      var lastname =
        req.body.lastname !== undefined ? req.body.lastname : values.lastname;
      var email = req.body.email !== undefined ? req.body.email : values.email;
      // var password =
      //   req.body.password !== undefined
      //     ? encrypt(req.body.password)
      //     : values.password;
      var password =
        req.body.password !== undefined
          ? req.body.password
          : values.password;
      var gender =
        req.body.gender !== undefined ? req.body.gender : values.gender;
      var birthdate =
        req.body.birthdate !== undefined
          ? req.body.birthdate
          : values.birthdate;
      var nationality = null;
      if (req.body.nationality !== undefined) {
        nationality = req.body.nationality;
      }
      var sql2 = `update users set firstname=?,lastname=?,email=?,password=?,gender=?,nationality=?,birthdate=? where username=?;`;
      connection.query(
        sql2,
        [
          firstname,
          lastname,
          email,
          password,
          gender,
          nationality,
          birthdate,
          req.query.username,
        ],
        function (error, result) {
          if (error) throw error;

          if (
            req.body.username !== undefined &&
            req.body.username !== req.query.username
          ) {
            connection.query(
              sql,
              [req.body.username],
              function (error, result) {
                if (error) throw error;
                if (result.length == 0) {
                  sql2 = `update users set username=? where username=?;`;
                  connection.query(
                    sql2,
                    [username, req.query.username],
                    function (error, result) {
                      if (error) throw error;
                      res.send(result);
                    }
                  );
                } else res.send("username is unavailable!");
              }
            );
          } else res.send(result);
        }
      );
    });
  });
};
stadium = function (req, res) {
  connection.connect(function (error) {
    if (error) throw error;

    var sql = `select * from stadiums where id= ?;`;
    connection.query(sql, [req.body.stadiumid], function (error, result) {
      if (error) throw error;
      // res.send('User signup'+result.insertId);
      res.send(result);
    });
  });
};
reservation = function (req, res) {
  connection.connect(function (error) {
    if (error) throw error;

    var sql = `select seat from reservation where matchid= ? and username=?;`;
    connection.query(
      sql,
      [req.body.matchid, req.body.username],
      function (error, result) {
        if (error) throw error;
        // res.send('User signup'+result.insertId);
        res.send(result);
      }
    );
  });
};
module.exports = {
  cancel_reservation,
  reserve,
  signin,
  signup,
  match_seats,
  stadiums,
  view_matches,
  match,
  edit_user,
  stadium,
  users,
  reservation,
  user,
};
