const mongoose = require('mongoose');

const dbUrl = 'mongodb://admin@admin:mongodb:27017/mydb'; // Replace 'my_database' with your preferred database name.

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));
