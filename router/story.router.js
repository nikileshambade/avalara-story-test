const express = require('express');
const storyRouter = express.Router();
const { getStoryController, addStoryController } = require('../controller/story.controller');

storyRouter.route('')
.get(getStoryController)
.post(addStoryController)

storyRouter.route('/:id')
.get(getStoryController)
.post(addStoryController)

module.exports = storyRouter