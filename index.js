var express = require('express')
var app = express()

// const cors =require("cors");
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
  });
  // app.use(
  //   cors({
  //     origin: "http://localhost:3000",
  //     methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  //   })
  // );
app.use('/', require('./routers/admin/adminRouter'));
app.use('/',require('./routers/manager/managerRouter'));
app.use('/',require('./routers/fan/fanRouter'));

app.listen(3000, () => console.log('Express server is running on port 3000'));















// const { new_match, edit_match, new_stadium } = require('./Controllers/Manager');
// const { cancel_reservation, reserve, signin, signup, match_seats, stadiums, view_matches, match ,edit_user,stadium} = require('./Controllers/Fan');
// const { authorize, remove_user, unauthorized_users } = require('./Controllers/Admin');

// app.get('/unauthorized_users', (req, res,next) => { unauthorized_users(req, res); });
// app.post('/signup', (req, res,next) => signup(req, res));
// app.post('/signin', (req, res,next) => signin(req, res));
// app.post('/new_match', (req, res,next) => new_match(req, res));
// app.post('/new_stadium', (req, res,next) => new_stadium(req, res));
// app.get('/stadiums', (req, res,next) => stadiums(req, res));
// app.get('/view_matches', (req, res,next) => view_matches(req, res));
// app.post('/match', (req, res,next) => match(req, res));
// app.get('/match_seats', (req, res,next) => match_seats(req, res));
// app.delete('/remove_user', (req, res,next) => remove_user(req, res));
// app.post('/authorize', (req, res,next) => authorize(req, res));
// app.post('/reserve', (req, res,next) => reserve(req, res));
// app.delete('/cancel_reservation', (req, res,next) => cancel_reservation(req, res));
// app.post('/edit_match', (req, res,next) => edit_match(req, res));
// app.post('/edit_user', (req, res,next) => edit_user(req, res));
// app.post('/stadium', (req, res,next) => stadium(req, res));
