-- Create the burgers_db database --
DROP DATABASE IF EXISTS burger_db
CREATE DATABASE burger_db;
USE burger_db;

-- Create a burgers table with the required fields --
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured boolean NOT NULL,
	PRIMARY KEY (id)
);
