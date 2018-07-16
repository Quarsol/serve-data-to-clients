
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohort').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohort').insert([
        {id: 1, cohortName: '17-01-WD-DP', cohortCode: 'g100', numberOfStudents: '28'},
        {id: 2, cohortName: '17-01-DS-GT', cohortCode: 'g105', numberOfStudents: '24'},
        {id: 3, cohortName: '17-02-WD-PX', cohortCode: 'g109', numberOfStudents: '30'},
        {id: 4, cohortName: '17-03-WD-BD', cohortCode: 'g110', numberOfStudents: '29'}
      ]);
    }).then(() => {
        return knex.raw("ALTER SEQUENCE resolution_id_seq RESTART WITH 5;");
    });
};
