exports.up = function(knex, Promise) {
  return knex.schema
        .createTable('user', function(table) {
            table.increments('id');
            table.string('username', 255).notNullable();
            table.string('address', 255).notNullable();
            table.string('email', 255).notNullable();
            table.string('password', 255).notNullable();
        })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};