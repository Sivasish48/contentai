import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const AiOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  formData: text("formData").notNull(), // Use text for storing serialized data (JSON string)
  aiResponse: text("aiResponse"), // Storing AI response as text
  templateSlug: varchar("templateSlug").notNull(), // Store template slug as varchar
  createdBy: varchar("createdBy").notNull(), // Store the email address or identifier as varchar
  createdAt: timestamp("createdAt").notNull(), // Use timestamp for date and time
});
