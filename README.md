# MealMaker App (very simple) using HTML, SCSS and vanilla JS.

https://clever-panini-5fa850.netlify.app/

I created a simple interactive app (recipe-checker) that provides recipe on certain request.
This requests are:

- pizza
- cake
- beef
- chicken
- potato
- fish
- broccoli
  try other (must be 1 word).

## Functionality and work-flow

Using an API with GET request we:

1. User inputs desired type of food.
2. Create a markup for search "menu" where all recipes with keyword are shown.
3. Pagination generated (2 or more pages available depending on how many recipes available and how many recipes we want to show per page).
4. When recipe preview on search menu is clicked - we add hash to window.location and generate markup for full recipe is created on the main part of application.
5. User can click on the bookmark button above the recipe (beneath the recipe picture) and this recipe will appear on bookmarks button above at the top of the app, same idea as n4.
6. This recipes are stored in the local storage browser and can later be returned to the user if he leaves the app.
7. Clicking on the bookmarked recipe will re-render the app to show this recipe back on screen.

JS itself based on classes, we have main View.js module that is a parent class for all other classes. It has main functions like clearing parent element, rendering errors, rendering markups etc.

All other classes were implemented just to make code more readable, what I did was to separate all the elements that have to be rendered into different classes.

_For more info please feel free to check code, as it has plenty of comments_

_JS_ is divided into three main parts: _controller_ (app logic, entry point), _model_ (business logic + state), _view_ everything that is related to rendeding.
I also included _helpers_ (which is in this case an async function to return a promise from API) and _config_ (variables).

### Thanks!
