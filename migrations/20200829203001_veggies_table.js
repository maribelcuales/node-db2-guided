// the .up() records the changes to be applied to the database 
exports.up = function(knex) {
  // create veggies table 
  return knex.schema.createTable('veggies', tbl => {
    // primary key, called id, autoincrement, not null 
    tbl.increments(); 

    tbl.string("name", 255).notNullable().unique(); 
    tbl.boolean("tasty"); 

    tbl.timestamps(true, true);  // created_at and updated_at columns 
  });
};

// the .down() records how to undo the .up() changes 
exports.down = function(knex) {
  // remove the veggies table 
  return knex.schema.dropTableIfExists("veggies"); 
};
