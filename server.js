const express = require('express');
const app = express();
const storyRouter = require('./router/story.router');

app.use(express.static('public'));
app.use('/css', express.static('public/css'));
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs');

app.use("/", storyRouter);

app.listen(3003, () => {
  console.log("Server is up and running on http://localhost:3003/")
})