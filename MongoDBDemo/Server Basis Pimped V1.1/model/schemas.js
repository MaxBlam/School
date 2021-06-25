const { Schema, model } = require('mongoose');

const dog = new Schema({
  name: { type: String, default: 'wau wau', unique: true },
  born: { type: Date, min: new Date('2000-01-01'), max: Date.now, required: true },
  favFoods: [
    {
      type: String,
      minLength: 3,
      maxLength: 20,
    },
  ],
  sex: { type: String, enum: ['male', 'female'] },
  image: String,
});

const Dog = model('dog', dog);

//Error



module.exports = { Dog };
