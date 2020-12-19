exports.up = function(knex) {
    return knex.schema.createTable('submission', table => {
        table.collate('utf8mb4_unicode_ci');
        table.increments('id').primary();
        table.string('userName', 155).notNullable();
        table.string('email', 255).notNullable();
        table.string('phone', 255).notNullable();
        table.string('productName', 155).notNullable();
        table.datetime('startDate').notNullable();
        table.double('warrantyPeriod',6,2).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('submission');
  };
  