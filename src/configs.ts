import dotenv from 'dotenv';

dotenv.config({ path: `.env` });

export const {
  PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DATABASE,
} = {...process.env } as { [key: string]: string };
