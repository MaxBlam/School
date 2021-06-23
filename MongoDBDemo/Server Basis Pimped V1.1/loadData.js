require('./db/connect');
require('./model/dogs');
require('colors');
const { Dog } = require('./model/schemas');
//const dogs = require('./dogs.json');

(async () => {
  try {
    const dogs = [
      {
        born: '1999-10-16',
        name: 'Cupcake',
        favFoods: ['le', 'meat'],
        sex: 'mehl',
        image: 'images/1.jpg',
      },
      {
        born: '2001-04-22',
        name: 'Britney Ears',
        favFoods: ['turnips', 'corn'],
        sex: 'female',
        image: 'images/2.jpg',
      },
    ];
    await Dog.create(dogs);
    console.log('Data loaded');
  } catch (error) {
    console.error(`Error ====> ${error.message.red}`);
  } finally {
    process.emit('SIGINT');
  }
})();
