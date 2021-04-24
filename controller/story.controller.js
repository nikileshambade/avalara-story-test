const { data, getStoryById, addOptionToStory } = require('../data');

const getStoryController = (req, res) => {
  const { id } = req.params;
  if(id) {
    const fetchedData = getStoryById(id);
    if(fetchedData.length > 0)
      return res.render('index', { data: fetchedData[0] })
  }
  // added this line, in case any case failed it should load start of the story
  return res.render('index', { data: data[0] })
}

const addStoryController = (req, res) => {
  const { optiontext, optiontitle, optionparentid } = req.body;
  addOptionToStory(optionparentid,optiontext,optiontitle);
  const fetchedData = getStoryById(optionparentid);
  return res.render('index', { data: fetchedData[0] })
}

module.exports = {
  getStoryController,
  addStoryController
}