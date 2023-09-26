const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const Poll = require( '../db/models/poll');

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json())

// Stable Api Version is used for keeping consistent methods over version upgrades.
// Create a MongoClient with a MongoClientOptions object to set the Stable Api Version
const mongoDb = process.env.MONGO_URI;

mongoose.connect(mongoDb, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongo connection error'));

app.post('/polls', async (req, res) => {
  console.log(req.body);
  const { pollName, pollDescription, pollLocation, pollDuration, pollAvailabilities } = req.body;
  /* req.body 
  {
    pollName: 'Valorant Review',
[0]   pollDescription: 'Meeting between me and friends',
[0]   pollLocation: 'Bludbuds.',
[0]   pollDuration: '30'
  }
  */
 /*
  name: { type: String, required: true},
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: false },
  createdAt: { type: Date },
  // { 'Day': 'Time start?' }
  availabilities: { type: Object, required: true },
  location: { type: String },
  duration: { type: Number }
 */
  try {
    const pollData = {
      name: pollName,
      description: pollDescription,
      location: pollLocation,
      duration: parseInt(pollDuration) * 60,
      availabilities: pollAvailabilities
    }

    const poll = new Poll(pollData);
    const result = await poll.save();
    console.log(result);
  } catch(err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
});
