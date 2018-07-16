const express = require('express')
const router = express.Router()
const query = require('../db/query.js')

router.get('/', (req, res, next) => {
  query.getCohort()
  .then(cohort => {
    return res.json({ cohort })
  }).catch(next)
})

router.get('/:id', (req, res, next) => {
  query.getCohortById(req.params.id)
  .then(cohort => {
    if (cohort){
      return res.json({ cohort })
    } else {
      return res.json({ error: 'Not found' })
    }
  }).catch(next)
})



module.exports = router
