const express = require('express')
const router = express.Router()
const {
  getAllData,
  insertData,
  deleteData,
  updateData,
} = require('../utils/queries')
const getConnection = require('../utils/connection')

//Similarly to the product endpoints, here we will
//use the connection through a pool and release it after
//every MySQL query

//Manage the get requests. Only get all categories without
//distinction
router.get('/', (req, res) => {
  getConnection((connection) => {
    connection.query(getAllData('*', 'category'), (err, rows, field) => {
      connection.release()
      res.status(200).json({
        message: 'GET to category successfully',
        data: rows,
      })
    })
  })
})

//Manage post requests
router.post('/', (req, res) => {
  const { name } = req.body

  getConnection((connection) => {
    connection.query(
      insertData('name', 'category', `?`),
      [name],
      (err, rows, field) => {
        if (!err) {
          connection.release()
          res.status(200).json({
            message: 'POST to category successfully',
            data: rows,
          })
        } else {
          throw err
        }
      }
    )
  })
})

//Manage put requests
router.put('/:id', (req, res) => {
  const { name } = req.body

  getConnection((connection) => {
    connection.query(
      updateData('category', 'name =? ', 'id = ?'),
      [name, req.params.id],
      (err, rows, field) => {
        if (!err) {
          connection.release()
          res.status(200).json({
            message: 'PUT to category successfully',
            data: rows,
          })
        } else {
          throw err
        }
      }
    )
  })
})

//Manage delete requests
router.delete('/:id', (req, res) => {
  getConnection((connection) => {
    connection.query(
      deleteData('category', 'id =?'),
      [req.params.id],
      (err, rows, field) => {
        if (!err) {
          connection.release()
          res.status(200).json({
            message: 'DELETE to category successfully',
            data: rows,
          })
        } else {
          throw err
        }
      }
    )
  })
})

module.exports = router
