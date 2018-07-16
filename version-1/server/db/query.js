const knex = require('./knexConfig.js')

function getCohort(){
  return knex('cohort')
    .select()
    .orderBy('id', 'desc')
}

function getCohortById(id){
  return knex('cohort')
    .select()
    .where('id', id).first()
}

module.exports = {
  getCohort,
  getCohortById
}
