var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var  bodyParser = require( 'body-parser' )
var logger = require('morgan');
var cors = require('cors')
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '10.186.15.252',
  database: 'bronze',
  password: 'postgres',
  port: 5432,
});

const getMerchants = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM data_shp', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const getNeighbers = (x, y) => {
  return new Promise(function(resolve, reject) {
    var sql = 'SELECT * from data_shp where ST_DWithin(ST_Transform(geom1::geometry, 26986), ST_Transform(\'SRID=4326;POINT('+x+' '+y+')\'::geometry, 26986), 400*1000)';
    pool.query(sql, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}
var usersRouter = require('./routes/users');
const { type } = require('os');
const { error } = require('console');
const { query } = require('express');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  getMerchants()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/search', (req, res) => {
  getMerchants()
  .then(response => {
    var my_text = req.body.text;
    var my_choice = req.body.choice;
    var my_response = JSON.parse(response);
    var send_data = [];
    var cou = 0;
    if(my_choice=="时间"){
      for(var i=0;i<my_response.length;i++){
        cou += 1;
        if(my_response[i].time.indexOf(my_text) != -1){
          send_data.push(my_response[i]);
        }
      }
    }
    res.send(send_data);
     })
  .catch(error => {
    res.status(500).send(error);
  })
})
//前端传地理位置，后端查多少范围内的文物
app.get('/around', (req, res) => {
  getNeighbers(req.query.x, req.query.y)
  .then(response => {
    cou = 0;
    send_data = [];
    for(var i=0;i<response.length;i++){
      cou += 1;
      meta = {}
      meta['id'] = response[i]['id'];
      meta['time'] = response[i]['time'];
      meta['name'] = response[i]['name'];
      meta['lon'] = response[i]['longitude'];
      meta['lat'] = response[i]['latitude'];
      send_data.push(meta);
    }
    res.send(send_data);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3002, () => {
  console.log(`App running on port 3002.`)
})
module.exports = app;
