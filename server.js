//requirements
const express = require ('express');
const mongoose = require ('mongoose');

//point to route files
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//initialize app
const app = express();

//db config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log('MongoDb Connected'))
  .catch(err => console.log(err));

//route to index
app.get('/', (req, res) => res.send('Hello'));

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//set port (mlab || local)
const port = process.env.PORT || 5000;

//listen on port
app.listen(port, () => console.log('Server running on port ${port}'));
