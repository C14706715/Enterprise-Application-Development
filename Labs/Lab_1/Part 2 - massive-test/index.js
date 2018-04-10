
//sudo lsof -i :3000
//kill -9 3000
//node index.js

var express = require('express');
var app = express();
var Massive = require("massive");
var db = Massive.connectSync({db : "ExamplePGGuide"});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})


app.get('/', function(req, res) {
    res.send('Return JSON or HTML View');
});

/*
  Question 1
  Part 1:
    List all users email and sex in order of most recently created. Do not include password hash in your output
    http://127.0.0.1:3000/users
*/
app.get('/users', function(req, res) {
    db.run("Select email, details from users order by created_at desc",function(err, result) {
        res.send(result);
    });
});



/*
  Question 1
  Part 2:
    Show above details of the specified user
    http://127.0.0.1:3000/users/16
*/
app.get('/users/:id', function(req, res) {
    let id = req.params.id;
    db.users.find({id: id}, function (err, result) {
        res.send(result)
    });
});

/*
  Question 1
  Part 3: 
  List all products in ascending order of price
  http://127.0.0.1:3000/products
*/
app.get('/products', function(req, res) {
    db.run("select * from products order by price asc",function(err, result) {
        res.send(result);
    });
});

/*
  Question 1
  Part 4:
  Show details of the specified products
  http://127.0.0.1:3000/products/16
*/
app.get('/products/:id', function(req, res) {
    let id = req.params.id;
    db.products.find({id: id}, function (err, result) {
        res.send(result)
    });
});

/*
  Question 1
  Part 5:
  List purchase items to include the receiver’s name and, address, the purchaser’s email address and the price, quantity and delivery status of the purchased item. Order by price in descending order
  http://127.0.0.1:3000/purchase
*/
app.get('/purchase', function(req, res) {
    db.run("select title, name, address, email, purchase_items.price, quantity, purchase_items.state from products join purchase_items on products.id = purchase_items.product_id join purchases on purchase_items.purchase_id = purchases.id join users on purchase_items.id = users.id",function(err, result) {
        res.send(result);
    });
});

/*
  Question 2
  For your solution you should implement the query (badly) in such a way as to allow an attacker to inject arbitrary SQL code into the query execution. Show, using your badly implemented approach, how an attacker can craft a query string to allow the deletion of a product from the products table.
  For convenience, you can continue to use MassiveJS to interface with the database.
  http://127.0.0.1:3000/products?name=Book
*/
app.get('/products/[?title=string]', function(req, res) {
    let id = req.params.id;
    db.products.find({id: id}, function (err, result) {
        res.send(result)
    });
});

/*
  Question 3
  Provide  two  solutions to eliminate the security hole in your approach from the previous section as follows:
  ● Using a parameterised query
  ● Using a stored procedure using SQL or PLPGSQL whichever you prefer
  Explicitly show that the injection attack is not now possible for each of your solutions
  Again, you can just use MassiveJS as your database interface library here too.
*/

/*
    Using a parameterised query
    http://localhost:3000/products1?name=Book%27%20union%20(select%20id,%20email,%20null,%20null,%20null,%20null%20from%20users)--
*/
 app.get('/products1', function(req, res) {
    let name = req.params.name;
     db.run("select * from products where title like '%' || ${title} || '%' order by price asc",function(err, result) {
        res.send(result);
    });
 });

/*
    Using a stored procedure using SQL or PLPGSQL
    http://localhost:3000/products2?name=Book%27%20union%20(select%20id,%20email,%20null,%20null,%20null,%20null%20from%20users)--
*/
app.get('/products2', function(req, res) {
    let name = req.params.name;
     db.run("select * from getProducts(${title})", {title: req.query.name}), function(err, result) {
        res.send(result);
    }
});


/*
  Question 4
  Create a brand new Express project using the Sequelize ORM. Install and configure Sequelize and wire it up to the  pgguide  database.. Verify that you have basic connectivity before proceeding.
  Create Sequalize migrations for the  pgguide  sample database
  Ensure that the appropriate associations and referential integrity checking are set up in your models
*/

/*
  Question 5
  Use your models and Javascript code to populate the database with some additional test data for all of the models above
*/

/*
  Question 6
  Reimplement the RESTful API using Sequelize and Express for your system. Your API should support the following CRUD operations as follows, returning JSON responses
  GET /products[?name=string]
  List all products
  GET /products/:id
  Show details of the specified products
  POST /products
  Create a new product instance
  PUT /products/:id
  Update an existing product
  DELETE /products/:id
  Remove an existing product
  Show test cases for each of the API endpoint REST operations
*/