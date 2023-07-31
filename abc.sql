-- drop database reservation;
create database reservation;
use reservation;
create table users(username varchar(100) unique, firstname varchar(100),
lastname varchar(100),email varchar(100),password varchar(200), nationality varchar(100),
gender varchar(1), birthdate date, userRole varchar(100));
create table stadiums(id int primary key auto_increment, stadiumname varchar(100),width int,length int );
create table matches(id int primary key auto_increment, team1 varchar(100),team2 varchar(100), stadiumid int,
matchtime  DATETIME,mainrefree varchar(100),lineman1 varchar(100),lineman2 varchar(100),
foreign key (stadiumid) references stadiums(id)
 );
 create table reservation (id int unique key auto_increment,username varchar(100), matchid int, seat int,
 foreign key (username) references users(username) on update cascade on delete cascade, foreign key (matchid) references  matches(id)
 );
 create table unauthorized_users(username varchar(100) unique, firstname varchar(100),
lastname varchar(100),email varchar(100),password varchar(200), nationality varchar(100),
gender varchar(1), birthdate date, userRole varchar(100));

select * from matches;