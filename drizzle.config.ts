import { defineConfig } from 'drizzle-kit';
import "dotenv/config"
import { configDotenv } from 'dotenv';
export default defineConfig({
  dialect: "postgresql",
  schema: "./database/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url:process.env.DATABASE_URL!,
    
  }

})