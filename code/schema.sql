create database express1_db;
use express1_db;

create table Auth (
    id integer primary key auto_increment,
    firstName varchar (20),
    lastName varchar(20),
    email varchar (20),
    password varchar (100)
);

create table Task (
   id integer primary key auto_increment,
   title varchar (20) ,
   auth_id integer,
   content varchar(1000)
   
);