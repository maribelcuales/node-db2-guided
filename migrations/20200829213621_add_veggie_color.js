exports.up = function(knex) {
  return knex.schema.table("veggies", tbl => {
    tbl.string('color', 128); 
  });
};

exports.down = function(knex) {
  return knex.schema.table("veggies", tbl => {
    tbl.dropColumn("color"); 
  }); 
};

