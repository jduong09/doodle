const express = require('express');
const Poll = require('../../../db/models/poll');
const crypto = require('crypto');
const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const polls = await Poll.find({}).then(data => {
        return data.map(poll => {
          return {
            id: poll._id.toString(),
            title: poll.name,
            location: poll.location
          }
        });
      });
      res.status(200).json({ response: 'Successfully retrieved all polls', polls });
    } catch(err) {
      res.status(400).json({ response: 'Error: failure to retrieve all polls.' });
    }
  })
  .post(async (req, res) => {
    const { pollName, pollDescription, pollLocation, pollDuration, pollAvailabilities } = req.body;
  
    try {
      const pollData = {
        name: pollName,
        description: pollDescription,
        location: pollLocation,
        duration: parseInt(pollDuration) * 60,
        availabilities: pollAvailabilities,
        responses: {}
      }
  
      const poll = new Poll(pollData);
      await poll.save();
      res.status(200).json({ response: 'Successfully created poll.' });
    } catch(err) {
      res.status(400).json({ response: 'Failure to create poll.' });
    }
  })

router.patch('/:pollId', async (req, res) => {
  const { pollName, pollDescription, pollLocation, pollDuration, pollAvailabilities } = req.body;

  try {
    const pollData = {
      name: pollName,
      description: pollDescription,
      location: pollLocation,
      duration: parseInt(pollDuration) * 60,
      availabilities: pollAvailabilities
    }

    await Poll.findOneAndUpdate({ _id: req.params.pollId }, pollData);
    res.status(200).json({ response: 'Successfully updated poll.' });
  } catch(err) {
    res.status(400).json({ response: 'Failure to update poll.' });
  }
});

router.get('/:pollId/pollInfo', async (req, res) => {
  try {
    const pollData = await Poll.findById(req.params.pollId)
      .then(data => {
        return {
          id: req.params.pollId,
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

router.post('/:pollUuid/response', async (req, res, next) => {
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
    console.log(newResponseObj);
  
    const response = await Poll.findOneAndUpdate({ _id: req.params.pollUuid }, { responses: newResponseObj });
    res.status(200).json({ response: 'Successfully added response.', data: response });
  } catch(err) {
    res.status(400).json({ response: 'Failure to create response.' });
  }
});

module.exports = router;