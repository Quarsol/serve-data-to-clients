const knex = require('./knexConfig.js')

function getCohort(){
  return knex('cohort')
    .select()
    .from()
    .orderBy('id', 'desc')
}

module.exports = {
  getCohort
}
