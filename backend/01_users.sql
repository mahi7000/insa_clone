CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    picture TEXT,
    email_address VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL
)