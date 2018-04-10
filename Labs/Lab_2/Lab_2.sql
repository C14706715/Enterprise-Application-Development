//Create Database
CREATEDB LAB_2

//Create Table
create table user_table(
    username varchar(50) PRIMARY KEY,
    password varchar(64), 
    access_key varchar(160),
    secret_key varhchar(320);
    
//Insert into Table
insert into user_table(username, password) values (
    'Jake', crypt('Jake1234', gen_salt('bf')));