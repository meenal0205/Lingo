import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: "postgresql",
  schema: "./database/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url:"postgresql://Lingo_owner:8YU7gsuRpKVL@ep-dry-smoke-a5e2ss2x.us-east-2.aws.neon.tech/Lingo?sslmode=require",
    
  }

})