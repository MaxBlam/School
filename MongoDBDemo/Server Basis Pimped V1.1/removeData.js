
require('./db/connect');
require('./model/dogs');
require('colors');
const { Dog } = require('./model/schemas');

(async () => {
  try {
    await Dog.deleteMany({});
    console.log('Data removed');
  } catch (error) {
    console.error(`Error ====> ${error.message.red}`);
  } finally {
    process.emit('SIGINT');
  }
})();
