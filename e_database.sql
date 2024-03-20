-- Create the database
CREATE DATABASE IF NOT EXISTS s_data;

-- Switch to the newly created database
USE s_data;

-- Create the table c_data
CREATE TABLE IF NOT EXISTS c_data (
    ticker VARCHAR(10),
    date DATE,
    revenue INT,
    gp INT,
    fcf INT,
    capex INT
);

-- Load data into the c_data table
LOAD DATA INFILE 'D:\databq\s-data.csv'
INTO TABLE c_data
FIELDS TERMINATED BY ','
ENCLOSED BY '\"'
LINES TERMINATED BY '\\n'
IGNORE 1 ROWS;



ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Iamwealthy@555';



FLUSH PRIVILEGES;
