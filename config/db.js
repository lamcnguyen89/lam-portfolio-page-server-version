// Conects to mongodb database using mongoose

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Gives back a promise
const connectDB = async () => {
try {
 // Since mongoose.connect returns a promise, put await right before it 
   await mongoose.connect(db)
   console.log('MongoDB Connected!!')
} catch(err) {
    console.error(err.message);
    // Exit process with failure if failure to connect
    process.exit(1)
}
}

module.exports = connectDB;
