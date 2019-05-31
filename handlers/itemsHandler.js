let mysql = require('mysql');
let config = require('../knexfile');

let conn = mysql.createConnection(config.connection);
const knex = require('knex')(config);


function addItem(request, response) {
    console.log(response.body);
    knex('items')
        .insert({
            name: request.body.name,
            desc: request.body.desc,
            imageName: request.body.imageName,
            price: request.body.price
        }).then(data => {
            response.json({
                status: "ok"
            })
        }).catch(error => {
            console.log(error);
            response.json({
                status: "error"
            });
        })
}

function fetchItem(request, response) {
    knex.select('*').from('items').
    then(data => {
        response.json(data
        )
    }).catch(error => {
        console.log(error);
        response.json({
            status: "error"
        });
    })
}




module.exports = {
    "addItem": addItem,
    "fetchItem": fetchItem
}