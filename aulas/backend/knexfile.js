// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DEV_DB_URL, // postgres://user_name:password@ipaddress:port/table
    migrations: {
      directory: './src/database/migrations'
    }
  },

  test: {
    client: 'postgresql',
    connection: process.env.TEST_DB_URL, // postgres://user_name:password@ipaddress:port/table
    migrations: {
      directory: './src/database/migrations'
    }
  },

  // configuração sqlite não utilizada
  testSqlite: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  }
};
