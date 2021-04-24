const { v4: uuid }= require('uuid');
// initial data
let data = [{
  id: uuid(),
  title: 'Grand Parent',
  options: {}
}]

const getStoryById = (id) => {
  return data.filter(item => item.id === id);
}

// adding option as well as creating a new story
const addOptionToStory = (id, text, name) => {
  const currentStory = getStoryById(id)[0];
  const newId = uuid()
  currentStory.options[name] = { id: newId, title: text }
  const newStoryToAdd = {
    id: newId,
    title: text,
    options: {}
  }
  data.push(newStoryToAdd);
}

module.exports = {
  data,
  getStoryById,
  addOptionToStory
};