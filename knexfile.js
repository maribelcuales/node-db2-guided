module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      // filename: './data/produce.db3',
      filename: './data/veggies.db3'
    },
    useNullAsDefault: true,  // for SQLite only 
  },
  // npx knex init 

  // staging/testing server 
  // you can delete this part if you are not using it
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // production server (perhaps heroku) 
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
