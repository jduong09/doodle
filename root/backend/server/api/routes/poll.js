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
      res.status(200).json({ response: polls });
    } catch(err) {
      console.log(err);
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
      res.end();
    } catch(err) {
      console.log(err);
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
    res.end();
  } catch(err) {
    console.log(err);
  }
});

router.get('/:pollId/pollInfo', async (req, res) => {
  const pollData = await Poll.findById(req.params.pollId)
    .then(data => {
      return {
        id: req.params.pollId,
        name: data.name,
        description: data.description,
        availabilities: data.availabilities,
        location: data.location,
        duration: data.duration
      };
    });

  res.json({ pollData });
  res.end();
});

module.exports = router;