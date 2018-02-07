const database = require('./database')();

module.exports.populate =function(request, response){
    database.products.sync();
    database.purchase_items.sync();
    database.purchases.sync();
    database.users.sync();
    
    var product_1 = database.products.build({
        id: '1',
        title: 'Macbook Pro',
        price: '1029',
        created_at: '23/01/2018',
        Deleted_at: '24/01/2018',
        tags:['Computer', 'Laptop']
    }).save();
    
    var product_2 = database.products.build({
        id: '2',
        title: 'Hyundai i20',
        price: '5600',
        created_at: '12/10/2016',
        tags:['Car', 'Motor']
    }).save();
    
    var item_1 = database.purchase_items.build({
        id: '1',
        purchase_id: '3',
        product_id: '54',
        price: '34.99',
        quantity: '2',
        state: 'Delivered'
    }).save();
   
   var item_2 = database.purchase_items.build({
        id: '2',
        purchase_id: '12',
        product_id: '5',
        price: '12',
        quantity: '17',
        state: 'Returned'
    }).save();
   
   var purchase_1 = database.purchases.build({
       id: '1',
       created_at: '12/10/2016',
       name: 'Jake Young',
       address: 'Dublin, Ireland',
       state: 'Dublin',
       zipcode: 'QW23 02',
       user_id: '23'
   }).save();
    
   var purchase_2 = database.purchases.build({
       id: '2',
       created_at: '2/7/2013',
       name: 'Marty Waters',
       address: 'Wexford, Ireland',
       state: 'Wexford',
       zipcode: 'ZZA213',
       user_id: '697'
   }).save();
    
   var user_1 = database.users.build({
       id: '1',
       email: 'Jakeyoungacc@gmail.com',
       password: 'Jake1234',
       details: 'sex => Male',
       created_at: '2/7/2013',
       Deleted_at: '24/01/2018'
   }}.save();
    
    var user_2 = database.users.build({
       id: '1',
       email: 'HGIDublin@hilton.com',
       password: 'Marty1234',
       details: 'sex => Male',
       created_at: '4/2/2017'
   }}.save();
    
    response.send("Successfull");
}

   