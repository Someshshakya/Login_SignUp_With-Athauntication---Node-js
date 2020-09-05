const knex = require('./knex_set_up');
module.exports = knex.schema.hasTable('users')
.then(exists=>{
    if (!exists){
        knex.schema.createTable('users',(table)=>{
            table.increments("id"),
            table.string('username'),
            table.string('name'),
            table.integer('phone'),
            table.string('email_id'),
            table.string('password')
        })
        .then(data=>{
            console.log("Your table is ready with your given columns")
        })
        .catch(err=>{
            console.log(err)
        });
    }
});