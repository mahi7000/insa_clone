import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

// const pool = new Pool({
//   user: process.env.DB_USER || "postgres",
//   host: process.env.DB_HOST || "localhost",
//   database: process.env.DB_NAME || "insa",
//   password: process.env.DB_PASSWORD || "postgresql",
//   port: process.env.DB_PORT || 5432,
// });

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

async function initializeDatabase() {
  try {
    await pool.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        picture TEXT,
        email_address VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL
      );
    `);
    console.log("Database tables initialized");
  } catch (error) {
    console.error("Error initializing database tables:", error);
  }
}

initializeDatabase();

export default pool;
