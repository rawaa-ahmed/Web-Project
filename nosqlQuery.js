var MongoClient = require("mongoose");
var url =
  "mongodb+srv://rawaa:1mongo_2db@cluster0.cogpw.mongodb.net/test  ";
  mongoose.connect(url);
  const MyModel = mongoose.model('company_not_optimized', new Schema({ name: String }));


  MyModel.findOne(function(error, result) { });
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo
    .collection("departments")
    .find({ dept_name: { $in: ["dept0", "dept1"] } })
    .project(dept_no)
    .explain()(function (err, result) {
    if (err) throw err;
    console.log(result);

    // dbo
    //   .collection("departments")
    //   .find({ dept_name: { $in: ["dept0", "dept1"] } })
    //   .project(dept_name, dept_no)
    //   .explain()(function (err, result) {});

    db.close();
  });


  // var query = { $or: [ { dept_name: 'dept0'}, { dept_name: 'dept1' }]};
  // dbo.collection("departments").find(query).project(dept_no,dept_name).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log();
  //   dept_names=_;
  //   dept_nos=_;
  //   query = { dept_no: [ { dept_name: 'dept0'}, { dept_name: 'dept1' }]};
  // dbo.collection("departments").find(query).project(dept_no).toArray(function(err, result) {
  // if (err) throw err;
  // depts=result.values();

  // });
  // });
});
