const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const rolesRoutes = require('./routes/roles');
const postsRoutes = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());


const dbURI = 'mongodb+srv://aniketsingh68737:JO52UzgtJSyqFxGT@cluster0.ag44n75.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI)

app.use('/api/users', userRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/posts', postsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
