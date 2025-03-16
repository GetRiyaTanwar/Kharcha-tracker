import "dotenv/config";
import {defineConfig} from 'drizzle-kit';
if(!process.env.DATABASE_URL){
    throw new Error("No process.env.DATABASE_URL is found")
}

export default defineConfig({
    schema: "./utils/schema.jsx", 
    out: "./drizzle",
    dialect: "postgresql", 
    driver: "pg",
    dbCredentials: {
      url: "postgresql://accounts:ypvN2ke3PGFE@ep-weathered-hear" 
    },
  });
  