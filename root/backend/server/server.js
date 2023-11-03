const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const Poll = require( '../db/models/poll');
const crypto = require('crypto');

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
  const { pollName, pollDescription, pollLocation, pollDuration, pollAvailabilities } = req.body;

  try {
    const pollData = {
      name: pollName,
      description: pollDescription,
      location: pollLocation,
      duration: parseInt(pollDuration) * 60,
      availabilities: pollAvailabilities
    }

    const poll = new Poll(pollData);
    await poll.save();
  } catch(err) {
    console.log(err);
  }
});

app.get('/polls/all', async (req, res, next) => {
  try {
    const polls = await Poll.find({}).then(data => {
      return data.map(poll => {
        return {
          title: poll.name,
          location: poll.location
        }
      });
    });
    res.json({ response: polls });
    res.end();
  } catch(err) {
    console.log(err);
  }
});

app.get('/polls/:pollUuid/pollInfo', async (req, res, next) => {
  console.log('hit get poll detail route');
  try {
    const pollData = await Poll.findById(req.params.pollUuid).then(data => {
      return {
        id: req.params.pollUuid,
        name: data.name,
        description: data.description,
        availabilities: data.availabilities,
        location: data.location,
        duration: data.duration
      };
    });
    res.status(200).json({ pollData, response: 'Successfully retrieved poll data.' });
  } catch(err) {
    res.status(400).json({ response: 'Failure to get poll data.' });
  }
});

app.post('/polls/:pollUuid/response', async (req, res, next) => {
  const { name, choices } = req.body;
  const userUuid = crypto.randomBytes(24).toString('hex');

  try {
    const responsesData = await Poll.findById(req.params.pollUuid).then(data => {
      return {
        responses: data.responses
      }
    });

    let newResponseObj = {};

    if (responsesData['responses']) {
      newResponseObj = {
        ...responsesData['responses'],
      }
    }
  
    newResponseObj[userUuid] = {
      name: name,
      availabilities: choices
    }
  
    const response = await Poll.findOneAndUpdate({ _id: req.params.pollUuid }, { responses: newResponseObj });
    res.status(200).json({ response: 'Successfully added response.', data: response });
  } catch(err) {
    res.status(400).json({ response: 'Failure to create response.' });
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
});
