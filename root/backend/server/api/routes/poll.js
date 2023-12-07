const express = require('express');
const Poll = require('../../../db/models/poll');

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
        availabilities: pollAvailabilities
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
          duration: parseInt(data.duration) / 60
        };
      });
    res.status(200).json({ pollData, response: 'Successfully retrieved poll data.' });
  } catch(err) {
    res.status(400).json({ response: 'Failure to get poll data.' });
  }
});

module.exports = router;