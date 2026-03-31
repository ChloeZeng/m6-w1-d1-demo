const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/event_db')
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log(error);
  });

// Schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: [18, 'Age must be 18 or above']
  }
});



// Model
const Person = mongoose.model('Person', personSchema);

// Create empty person (this will trigger validation error)
const person = new Person({ name: 'Jack', age: 21 });

// Run async function
(async () => {
  try {
    await person.save();
  } catch (err) {
    console.log(err);
  }
})();