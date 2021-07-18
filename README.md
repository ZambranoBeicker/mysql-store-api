# MySQL Store API

---

This is an practice API using **MySQL** and **Node** with Express. With this API you with be able to get, post, update and delete
data. In a nutshell, it's a CRUD

# Endpoints

--

There are just 2 endpoints: Product and Category

### Product

`http://localhost:3000/product`

With this route you just need to use the method you need (POST, GET, etc). Methods like delete or update, need to have an id to
know what item to delete or update. So for the last 2 methods it will be just:

`http://localhost:3000/product/[id]`

As simple as that.

### Category

`http://localhost:3000/category`

For this endpoint is the same. Just pick the method you need and use the data in the body. As in product route, in category
you will need to use and _id_ to indicate what item needs to be deleted or updated

`http://localhost:3000/category[id]`
