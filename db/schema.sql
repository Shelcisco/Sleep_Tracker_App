 DROP DATABASE IF EXISTS sleep_sync_db;
 CREATE DATABASE sleep_sync_db;

-- USE sleep_sync_db


-- CREATE TABLE users(
--     user_id INT AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     email_address VARCHAR(30)NOT NULL,
--     user_password VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE sleep_data(
--   sleep_data_id INT AUTO_INCREMENT PRIMARY KEY,
--   hours_of_sleep VARCHAR(30) NOT NULL,
--   mood VARCHAR(30) NOT NULL,
--   rem_sleep INT NOT NULL
-- );

-- ALTER TABLE users
-- ADD COLUMN sleep_data_id INT NOT NULL,
-- ADD CONSTRAINT fk_sleep_data_id
-- FOREIGN KEY (sleep_data_id) REFERENCES sleep_data(sleep_data_id);

--created sql tables until we know for sure our js code is correct.