exports.up = function(knex, Promise) {
  return knex.schema.createTable("animals", tbl => {
    tbl.increments();

    tbl
      .string("name", 255)
      .notNullable()
      .unique();

    tbl.string("type", 255).notNullable();
    tbl.boolean("domestic").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("animals");
};
