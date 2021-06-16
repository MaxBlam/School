require('./db/connect');
require('./model/dogs');
require('colors');
const { Dog } = require('./model/schemas');
const dogs = require('./dogs.json');

(async () => {
  try {
    await Dog.create(dogs);
    console.log('Data loaded');
  } catch (error) {
    console.error(`Error ====> ${error.message.red}`);
  } finally {
    process.emit('SIGINT');
  }
})();
