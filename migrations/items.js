exports.up = function(knex, Promise) {
  return knex.schema
        .createTable('items', function(table) {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.double('price', 255).notNullable();
            table.string('imageName', 255).notNullable();
            table.string('description', 255).notNullable();
        })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
};
