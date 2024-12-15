import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.tsx',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://multitool-ai_owner:t8saTEOb0gfR@ep-misty-math-a1lyazl5.ap-southeast-1.aws.neon.tech/multitool-ai?sslmode=require"
  },
});
