const express = require('express')
const router = express.Router()
const {
  getAllData,
  insertData,
  deleteData,
  updateData,
} = require('../utils/queries')
const getConnection = require('../utils/connection')

router.get('/', (req, res) => {
  if (req.query.search) {
    getConnection((connection) => {
      connection.query(
        `SELECT * FROM product WHERE name LIKE '%${req.query.search}%'`,
        (err, rows, field) => {
          if (err) {
            throw err
          }

          res.status(200).json({
            message: 'GET to products successfully',
            data: rows,
          })
        }
      )
    })

    return
  }

  getConnection((connection) => {
    connection.query(getAllData('*', 'product'), (err, rows, field) => {
      connection.release()
      res.status(200).json({
        message: 'GET to products successfully',
        data: rows,
      })
    })
  })
})

router.post('/', (req, res) => {
  const { name, price, category, discount, url_image } = req.body

  getConnection((connection) => {
    connection.query(
      insertData(
        'name, price, category, discount, url_image',
        'product',
        `?, ?, ?, ?, ?`
      ),
      [name, price, category, discount, url_image],
      (err, rows, field) => {
        if (!err) {
          connection.release()
          res.status(200).json({
            message: 'POST to products successfully',
            data: rows,
          })
        } else {
          throw err
        }
      }
    )
  })
})

router.put('/:id', (req, res) => {
  const { name, price, category, discount, url_image } = req.body

  getConnection((connection) => {
    connection.query(
      updateData(
        'product',
        'name =?, price =?, discount = ?, url_image = ?, category =?',
        'id = ?'
      ),

      [name, price, discount, url_image, category, req.params.id],
      (err, rows, field) => {
        if (!err) {
          connection.release()
          res.status(200).json({
            message: 'PUT to products successfully',
            data: rows,
          })
        } else {
          throw err
        }
      }
    )
  })
})

router.delete('/:id', (req, res) => {
  getConnection((connection) => {
    connection.query(
      deleteData('product', 'id =?'),
      [req.params.id],
      (err, rows, field) => {
        if (!err) {
          connection.release()
          res.status(200).json({
            message: 'DELETE to products successfully',
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
