import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema';
// Create a Neon connection
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);

// Initialize Drizzle with the Neon client
export const db = drizzle(sql as any,{schema});
