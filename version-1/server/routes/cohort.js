const express = require('express')
const router = express.Router()
const query = require('../db/query.js')

router.get('/', (req, res, next) => {
  query.getCohort()
  .then(cohort => {
    return res.json({ cohort })
  }).catch(next)
})
