import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema';
// Create a Neon connection
const sql = neon("postgresql://multitool-ai_owner:t8saTEOb0gfR@ep-misty-math-a1lyazl5-pooler.ap-southeast-1.aws.neon.tech/multitool-ai?sslmode=require");

// Initialize Drizzle with the Neon client
export const db = drizzle(sql as any,{schema});
