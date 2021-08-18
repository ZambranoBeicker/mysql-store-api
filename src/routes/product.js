const express = require('express')
const router = express.Router()
const {
  getAllData,
  insertData,
  deleteData,
  updateData,
} = require('../utils/queries')
const getConnection = require('../utils/connection')

//Here are all the endpoints related to the product route
//Every endpoint uses the connection to access the database through a pool
//to reuse the connection and after the query is done the connection is
//related

//Get all the data endpoint
router.get('/', (req, res) => {
  //If there's a 'search' param use the corresponding MySQL query for it
  if (req.query.search) {
    getConnection((connection) => {
      connection.query(
        `SELECT * FROM product WHERE name LIKE ?`,
        [`%${req.query.search}%`],
        (err, rows, field) => {
          if (err) {
            throw err
          }

          connection.release()
          res.status(200).json({
            message: 'GET to products successfully',
            data: rows,
          })
        }
      )
    })

    return
  }

  //If there's a param called 'category' get all the products
  //related to that category
  if (req.query.category) {
    getConnection((connection) => {
      connection.query(
        `SELECT * FROM product WHERE category = ?`,
        [req.query.category],
        (err, rows, field) => {
          if (err) {
            throw err
          }

          connection.release()
          res.status(200).json({
            message: 'GET to products successfully',
            data: rows,
          })
        }
      )
    })

    return
  }

  //If there's no param, just get all the products

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

//Manage the post requests
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

//Manage put requests
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

//Manage delete requests
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
