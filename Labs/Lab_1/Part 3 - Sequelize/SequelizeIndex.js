var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://@localhost:5432/ExamplePGGuide');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

var products = sequelize.define('products', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    price: Sequelize.NUMBER,
    createdAt: Sequelize.DATE,
    DeletedAt: Sequelize.DATE, 
    tags: Sequelize.ARRAY
});

var purchase_items = sequelize.define('purchase_items',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    purchase_id: Sequelize.INTEGER,
    product_id: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER,
    state:Sequelize.STRING
});

var purchases = sequelize.define('purchases', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    createdAt: Sequelize.DATE,
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    state: Sequelize.STRING,
    zipcode: Sequelize.STRING,
    user_id: Sequelize.INTEGER
});

var users = sequelize.define('users', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    details: Sequelize.STRING,
    created_at: Sequelize.DATE,
    deleted_at: Sequelize.DATE
});

sequelize.sync().then(function() {
  return User.create({
    username: 'jakeyoung',
    birthday: new Date(1995, 
                       09, 25)
  });
}).then(function(jane) {
  console.log(Jake.get({
    plain: true
  }));
});
