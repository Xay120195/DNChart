var express = require('express');
var app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

var corsOptions = {
  origin: "http://localhost:8081/*"
};

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

app.get('/loadSummary', function(req, res) {

    let offset = req.query.offset || 1;
    let limit = req.query.limit || 20;

    pool.query('begin transaction read only;select * from optionssummary offset ' + offset + ' limit ' + limit + ';select count(*) from optionssummary;end;', (error, result) => {
        
        if( error) {
            throw error;
        }
        res.status(200).json({data: result[1].rows, totalCount: result[2].rows[0].count})
    });

});

app.get('/loadDetails', function(req, res) {

    let offset = req.query.offset || 1;
    let limit = req.query.limit || 100;
    let order = req.query.order;
    let date = req.query.date || "";

    let sql = '\
    begin transaction read only; \
    select underlying as Symbol, underlyinglast as Price, optiontype as Type, strike, expiration, daystoexpiration as DTE, bid, ask, last_price as Last, volume, openinterest as OpenInt, volumeoiratio as VolOI, ivmid*100.0 as IV, delta, quotedate from optionsdetails \
    where bid>0 and DATE(quotedate)=' + date + ' ORDER BY ' + order + ' desc OFFSET ' + offset + ' LIMIT ' + limit + '; \
    select count(*) from optionsdetails where bid>0 and DATE(quotedate)=' + date + '; \
    end;'

    console.log(sql);

    pool.query(sql, (error, result) => {
        
        if( error) {
            throw error;
        }
        res.status(200).json({data: result[1].rows, totalCount: result[2].rows[0].count})
    });
});

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Server is listening at http://%s:%s", host, port)
})