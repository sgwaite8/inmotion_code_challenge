# Coding Challenge

## Objective
Create a webpage that manages a home movie collection.

## User Stories
- As a user I want to use the app in the latest version of Chrome.
- As a user I want to be able to enter new movies.
- As a user I want to be able to search existing movies by an arbitrary field.
- As a user I want to be able to see a list of all my movies.
- As a user I want to be able to either DELETE a movie or UPDATE a movie.
  (You must implement at least one.)

- As a user I want to record the following info about any given movie :
    - Genre
    - Actors
    - Title
    - Year
    - Rating

## Technical Requirements
- The page MUST be a single page application (though may have multiple routes and templates).
- You MUST use JQuery, AngularJS, or ReactJS - pick one and be prepared to defend your decision
- You MUST use git for version control.

- Bonus points:
    - App is constructed using the MVC architectural pattern
    - lodash.js or underscore.js
    - bootstrap.css or equivalent
    - use Local Storage to persist the data
    - One-way dataflow using a stream library like BaconJS or RxJS

You MAY use other publicly available JS components (please document separately any libraries or frameworks that you choose to use other than the ones listed here).

## Tips
- We are more interested in how it works than in how it looks
- It is more important that your code is bug free then feature rich
- Mistakes are ok, but be prepared to explain your code and defend your decisions

## Additional Comments
- When you start the challenge, please commit a file to the git repo named "started" with the content being the current date/time.
- Use what you believe to be best practices when developing the page. You will be judged on both the function and the form of your code.
- When you finish, create a git bundle( git bundle create code_challenge.bdl --all).
- Email that bundle to the person who sent you this coding challenge or host it on dropbox and email the link to download it.

##Susannah's notes on the project:
- I have code in my movie-search component that is not currently working. At this time, the user can add movies and delete movies. The search functionality does not yet work. 
- The data persists on the page, through Mongo.
- This is a single page application with React.
