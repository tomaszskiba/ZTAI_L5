const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tomaszskiba:zaq12wss@ds161316.mlab.com:61316/lab8',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
