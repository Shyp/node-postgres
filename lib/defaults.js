var defaults = module.exports = {
  // database host. defaults to localhost
  host: 'localhost',

  //database user's name
  user: process.platform === 'win32' ? process.env.USERNAME : process.env.USER,

  //name of database to connect
  database: process.platform === 'win32' ? process.env.USERNAME : process.env.USER,

  //database user's password
  password: null,

  //database port
  port: 5432,

  //number of rows to return at a time from a prepared statement's
  //portal. 0 will return all rows at once
  rows: 0,

  // binary result mode
  binary: false,

  //Connection pool options - see https://github.com/coopernurse/node-pool
  //number of connections to use in connection pool
  //0 will disable connection pooling
  poolSize: 10,

  //max milliseconds a client can go unused before it is removed
  //from the pool and destroyed
  poolIdleTimeout: 30000,

  // block sets the behavior of node-postgres when the connection pool is
  // full. Set to false to immediately return an error if no connections are
  // available. By default, node-postgres will wait an infinite amount of time
  // for a connection to become available.
  block: true,

  // acquireTimeout is the amount of time in ms to wait to check out a
  // database connection. By default, node-postgres will wait infinitely for
  // a connection to become available. If the acquireTimeout is negative, zero,
  // or NaN, pg.connect will return an error immediately.
  //
  // If block is set to false, this setting is ignored - node-postgres will
  // error immediately if block is false and the pool is full.
  //
  // The timeout message will be "Cannot acquire resource because the pool is
  // full"
  acquireTimeout: undefined,

  //frequency to check for idle clients within the client pool
  reapIntervalMillis: 1000,

  //pool log function / boolean
  poolLog: false,

  client_encoding: "",

  ssl: false,

  application_name : undefined,
  fallback_application_name: undefined
};

//parse int8 so you can get your count values as actual numbers
module.exports.__defineSetter__("parseInt8", function(val) {
  require('pg-types').setTypeParser(20, 'text', val ? parseInt : function(val) { return val; });
});
