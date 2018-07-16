
exports.up = function(knex) {
  return knex.schema.createTable('cohort', (table) => {
    table.increments();
    table.string('cohortName');
    table.string('cohortCode');
    table.string('numberOfStudents');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cohort');
};
