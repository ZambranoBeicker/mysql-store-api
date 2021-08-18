# MySQL Store API

This is an practice API using **MySQL** and **Node** with Express. With this API you with be able to get, post, update and delete
data. In a nutshell, it's a CRUD

# Endpoints

There are just 2 endpoints: Product and Category

The result would be a JSON object with a message called just _message_ saying that the request was successfully and an array of
objects called _data_. For the products the output will have the properties _id, name, price, url_image, discount_ and
_category_ (id).

The category ouput will be in the same format, the difference will be the number of properties which will be only 2:
_id_ and _name_

### Product

`http://localhost:3000/product`

With this route you just need to use the method you need (POST, GET, etc). Methods like delete or update, need to have an id to

**Sample output**

```
{
"message": "GET to products successfully",
"data": [
	{
		"id": 1,
		"name": "Product 1",
		"url_image": "https://someurl.com/skjdnvjsdv.jpg",
		"price": 1490,
		"discount": 20,
		"category": 1
	},
	{
		"id": 2,
		"name": "Product 2",
		"url_image": "https://someurl.com/skdnvjjsdv.jpg",
		"price": 10,
		"discount": 20,
		"category": 2
	},
	{
		"id": 3,
		"name": "Product 3",
		"url_image": "https://someurl.com/sjdnjksvdv.jpg",
		"price": 120,
		"discount": 0,
		"category": 1
	},
]
}
```

Find what item to delete or update. So for the last 2 methods it will be just:

`http://localhost:3000/product/[id]`

### Category

`http://localhost:3000/category`

For this endpoint is the same. Just pick the method you need and use the data in the body. As in product route, in category
you will need to use and _id_ to indicate what item needs to be deleted or updated

**Sample output**:

```
{
"message": "GET to category successfully",
"data": [
	{
		"id": 1,
		"name": "bebida energetica"
	},
	{
		"id": 2,
		"name": "pisco"
	},
	{
		"id": 3,
		"name": "ron"
	},
]
}
```

`http://localhost:3000/category[id]`
