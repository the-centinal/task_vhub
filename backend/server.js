
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const connectDb = require("./db-conn");


const app = express();
const PORT = process.env.PORT || 5000;


var corsOptions = {
  origin: 'http://localhost:5174/',
  methods : "GET, POST, PUT, DELETE",
  credentials : true,
}

app.use(cors(corsOptions))
app.use(express.json())



// MongoDB schema and model
const UserSchema = new mongoose.Schema({
  username: 
  {type: String,
    require: true,
  },
  email:   
  {type: String,
    require: true,
  },
  password:  
  {type: String,
    require: true,
  },
});

const User = mongoose.model('User', UserSchema);

app.use(bodyParser.json());


app.get('/' , (req, res) => {
    res.send('server is running')
})

// Register endpoint
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

connectDb().then(() => {

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
});
