const connection = require("../../database");
new_match = function (req, res) {
  console.log(req.body);
  var values = [
    req.body.team1,
    req.body.team2,
    req.body.stadiumid,
    req.body.mainrefree,
    req.body.matchtime,
    req.body.lineman2,
    req.body.lineman1,
  ];
  
  connection.connect(function (error) {
    if (error) throw error;
    var sql = `select matchtime from matches where team1=? or team1=? or team2=? or team2=?;`;
    connection.query(
      sql,
      [values[0], values[1], values[0], values[1]],
      function (error, result) {
        if (error) throw error;
        console.log(result);
        // res.send('User signup'+result.insertId);
        if ( values[0]!=values[1]){
          ///////////////////////////
          sql =
            `insert into matches(team1,team2,stadiumid,mainrefree,matchtime,lineman1,lineman2) values(` +
            connection.escape(values) +
            `);`;
          connection.query(sql, function (error, result) {
            if (error) throw error;
            // res.send('User signup'+result.insertId);
            res.send(result);
          });
        } else res.send('null');
      }
    );
  });
};

new_stadium = function (req, res) {
  console.log(req);

  var values = [req.body.stadiumname, req.body.width, req.body.length];
if(values[0]&&values[1]){
  connection.connect(function (error) {
    if (error) throw error;
    ///////////////////////////)
    var sql = `insert into stadiums(stadiumname,width,length) values(?);`;
    connection.query(sql, [values], function (error, result) {
      if (error) throw error;
      // res.send('User signup'+result.insertId);
      res.send(result);
      // console.log(result.);
    });
  });
}
};

edit_match = function (req, res) {
  // console.log(req)
  connection.connect(function (error) {
    if (error) throw error;
    var sql = `select * from matches where id=?;`;
    connection.query(sql, [req.body.matchid], function (error, result) {
      if (error) throw error;
      var values = result[0];
      var team1 = req.body.team1 !== undefined ? req.body.team1 : values.team1;
      var team2 = req.body.team2 !== undefined ? req.body.team2 : values.team2;
      var mainrefree =
        req.body.mainrefree !== undefined
          ? req.body.mainrefree
          : values.mainrefree;
      var matchtime =
        req.body.matchtime !== undefined
          ? req.body.matchtime
          : values.matchtime;
      var lineman1 =
        req.body.lineman1 !== undefined ? req.body.lineman1 : values.lineman1;
      var lineman2 =
        req.body.lineman2 !== undefined ? req.body.lineman2 : values.lineman2;
        
      var sql2 = `update matches SET team1=?,team2=?,mainrefree=?,matchtime=?,lineman1=?,lineman2=? where id=?;`;
      connection.query(
        sql2,
        [
          team1,
          team2,
          mainrefree,
          matchtime,
          lineman1,
          lineman2,
          req.body.matchid,
        ],
        function (error, result) {
          if (error) throw error;
          res.send(result);
        }
      );
    });
  });
};
module.exports = { new_match, edit_match, new_stadium };
