DROP DATABASE IF EXISTS sleep_sync_db;
CREATE DATABASE sleep_sync_db;

-- USE sleep_sync_db

-- CREATE EXTENSION IF NOT EXISTS  "uuid-ossp";

-- CREATE TABLE users(
--     user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     email_address VARCHAR(30)NOT NULL,
--     user_password VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE sleep_data(
--   sleep_data_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
--   hours_of_sleep VARCHAR(30) NOT NULL,
--   mood VARCHAR(30) NOT NULL,
--   rem_sleep INT NOT NULL
-- );