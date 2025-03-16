import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'

const sql = neon('postgresql://accounts:ypvN2ke3PGFE@ep-weathered-hear');
const db = drizzle(sql,{schema});