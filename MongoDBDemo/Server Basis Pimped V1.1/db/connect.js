const { connect, connection } = require('mongoose');
require('dotenv').config();
require('colors');


(async () => {
  try {
    await connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.error(`Error ====> ${error.message.red}`);
    process.emit('SIGINT');
  }
})();

connection.on('connected', () => console.log('Mongoose connected'.blue));
connection.on('disconnected', () => console.log('Mongoose disconnected'.blue));

process.on('SIGINT', () => {
  connection.close(() => {
    console.log('Mongoose terminated through app termination'.blue);
    process.exit(0);
  });
});