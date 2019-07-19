require('dotenv').config();
const express = require('express'),
      sessions = require('express-session'),
      massive = require('massive')

const app = express(),
      { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());
app.use(sessions({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 8349018320}
}))

massive(CONNECTION_STRING)
.then(db => {
  app.set('db', db);
  // console.log('db connected');
  app.listen( SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))
})