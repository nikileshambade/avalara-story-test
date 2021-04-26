# Test Title
Multi path stories.

## Getting Started
Below instructions will get you project run on to your local machine.

## Prerequisites

### Visual studio code (or any editor as per your comfort)
### Node 

## Configurations To Run Local
#### Step1 :
Clone the repo 
#### Step 2:
Run command :  clone-path > **npm install**
#### Step 3:
Once all the packages are installed run **npm start** command to run locally.
You can visit your site running on port 3003 : http://localhost:3003/

## Approach towards Solution:

Thought process to solve the problem is to have next story data in current story.
Maintained an Array of object to have all added story path data.
Structure of Object looks like:
```
{
  id,  --- id of current story
  title, --- title of current specific story
  options: {} --- this will have data of added story path
} 
```

***data.js*** is having some utility method that will basically add and fetch related stories.

>***addOptionToStory:***
This method will first fetch the story where we want to add next options.
It will also create a new story object of that option and add push it to array.
So that whenever you click on to the option, you will have data related to that option as a story in an array.

>***getStoryById:***
It is simple method that will return you an object of mentioned Id.

***getStoryController, addStoryController*** are two controller methods that are defined in ***story.controller.js*** which internally uses data utility to get or add data and 
render it on UI.
Specific controller is assigned to specific routes defined in StoryRouter.
