const connection = require("./database");
var size = 100000;
for (i = 49653; i < size; i++) {
  var user = [
    i,
    "firstname" + i,
    "lastname" + i,
    "2020-" + ((i % 12) + 1) + "-" + ((i % 12) + 1),
    i % 2 == 0 ? "F" : "M",
    "2000-" + ((i % 12) + 1) + "-" + ((i % 12) + 1),
  ];

  var sql2 = `insert into employees (emp_no,first_name,last_name,hire_date,gender,birth_date) VALUES (?);`;
  connection.query(sql2, [user], function (error, result) {
    if (error) throw error;
    // // res.send('User signup'+result.insertId);
    // res.send(result);
  });
  values = [
    i,
    "title" + (i % Math.ceil(size / 100)),
    "2020-" + ((i % 12) + 1) + "-" + ((i % 12) + 1),
    "2025-" + ((i % 12) + 1) + "-" + ((i % 12) + 1),
  ];
  sql2 = `insert into titles(emp_no,title,from_date,to_date) values(?);`;
  connection.query(sql2, [values], function (error, result) {
    if (error) throw error;
    // // res.send('User signup'+result.insertId);
    // res.send(result);
  });
  values = [
    i,
    1500 * (1 + (i % Math.ceil(size / 100))),
    "2020-" + ((i % 12) + 1) + "-" + ((i % 12) + 1),
    "2025-" + ((i % 12) + 1) + "-" + ((i % 12) + 1),
  ];
  sql2 = `insert into salaries(emp_no,salary,from_date,to_date) values(?);`;
  connection.query(sql2, [values], function (error, result) {
    if (error) throw error;
    // // res.send('User signup'+result.insertId);
    // res.send(result);
  });
}
for (i = 0; i < 10; i++) {
  var user = [i, "dept" + i, i * 10];

  var sql2 = `insert into departments(dept_no,dept_name,manager_no) values (?);`;
  connection.query(sql2, [user], function (error, result) {
    if (error) throw error;
    // // res.send('User signup'+result.insertId);
    // res.send(result);
  });
}

for (i = 0; i < size; i++) {
  var values = [i % 10, i];
  var sql2 = `update employees set dept_no=? where emp_no=?;`;
  connection.query(sql2, [values], function (error, result) {
    if (error) throw error;
    // // res.send('User signup'+result.insertId);
    // res.send(result);
  });

  
}
// var stadium = ["ModernStadium", 5, 10];

// stadium = ["NewStadium", 5, 10];
// sql2 = `insert into stadiums(stadiumname,width,length) values(?);`;
// connection.query(sql2, [stadium], function (error, result) {
//   if (error) throw error;
//   // // res.send('User signup'+result.insertId);
//   // res.send(result);
// });

// var values = [
//   "Ahly",
//   "Zamalk",
//   1,
//   "mainrefree",
//   "2024-5-5",
//   "lineman2",
//   "lineman1",
// ];

// connection.connect(function (error) {
//   if (error) throw error;
//   ///////////////////////////
//   var sql =
//     `insert into matches(team1,team2,stadiumid,mainrefree,matchtime,lineman1,lineman2) values(` +
//     connection.escape(values) +
//     `);`;
//   connection.query(sql, function (error, result) {
//     values = [
//       "Ahly",
//       "Zamalk",
//       2,
//       "mainrefree",
//       "2024-6-6",
//       "lineman2",
//       "lineman1",
//     ];

//     if (error) throw error;
//     // res.send('User signup'+result.insertId);
//     sql =
//       `insert into matches(team1,team2,stadiumid,mainrefree,matchtime,lineman1,lineman2) values(` +
//       connection.escape(values) +
//       `);`;
//     connection.query(sql, function (error, result) {
//       if (error) throw error;
//       // res.send('User signup'+result.insertId);
//     });
//   });
// });
// console.log("Done");
// // connection.connect(function (error) {

// //     if (error) throw error;
// //     ///////////////////////////

// // });

// // i = 2;
// // var values = ['team1' + i, 'team2' + i,
// //     2,
// //     'mainrefree',
// //     '2020-5-5',
// // 'lineman2' + i,
// // 'lineman1' + i
// // ];

// // connection.connect(function (error) {

// //     if (error) throw error;
// //     ///////////////////////////
// //     var sql = `insert into matches(team1,team2,stadiumid,mainrefree,matchtime,lineman1,lineman2) values(` + connection.escape(values) + `);`;
// //     connection.query(sql, function (error, result) {

// //         if (error) throw error;
// //         // res.send('User signup'+result.insertId);
// //         res.send(result);
// //     })
// // });
