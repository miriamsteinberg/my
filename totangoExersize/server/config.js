const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'totangodb.cg2blom8orxv.us-east-1.rds.amazonaws.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'totangoAdmin',
    password: env.DB_PASSWORD || 'totangoPassword',
    database: env.DB_NAME || 'postgres',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;