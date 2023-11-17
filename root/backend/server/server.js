const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = require('./api/router');

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

app.use(router);

app.get('/polls/:pollUuid/pollInfo', async (req, res, next) => {
  try {
    const pollData = await Poll.findById(req.params.pollUuid).then(data => {
      return {
        id: req.params.pollUuid,
        name: data.name,
        description: data.description,
        availabilities: data.availabilities,
        location: data.location,
        duration: data.duration,
        responses: data.responses
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
      return data.responses;
    });
  
    let newResponseObj = {};

    if (responsesData) {
      newResponseObj = {
        ...responsesData,
      }
    }

    choices.forEach((timestamp) => {
      if (newResponseObj[timestamp]) {
        newResponseObj[timestamp][userUuid] = name;
      } else {
        newResponseObj[timestamp] = {
          [userUuid]: name
        }
      }
    });
  
    const response = await Poll.findOneAndUpdate({ _id: req.params.pollUuid }, { responses: newResponseObj });
    res.status(200).json({ response: 'Successfully added response.', data: response });
  } catch(err) {
    res.status(400).json({ response: 'Failure to create response.' });
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
});
