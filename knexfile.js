// @ts-check

import path from 'path';
import { fileURLToPath } from 'url';
import { knexSnakeCaseMappers } from 'objection';
import 'dotenv/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const migrations = {
  directory: path.join(__dirname, 'server', 'migrations'),
};

export const development = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
  migrations,
  ...knexSnakeCaseMappers(),
};

export const test = {
  client: 'sqlite3',
  connection: ':memory:',
  useNullAsDefault: true,
  migrations,
  ...knexSnakeCaseMappers(),
};

export const production = {
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
  useNullAsDefault: true,
  migrations,
  ...knexSnakeCaseMappers(),
};
