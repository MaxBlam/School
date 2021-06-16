const { Dog } = require('./schemas');

const getDogs = () => Dog.find();

module.exports = { getDogs };
