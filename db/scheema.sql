DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("BBQ Burger", false), ("Chum Bucket", false), ("Blue Cheese Burger", false);