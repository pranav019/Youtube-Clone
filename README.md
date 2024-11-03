## 1 Project Initialization

- Created the react app using **_npx create-react-app youtube-clone_**.
- Configured Tailwind CSS to the application.

### Important Points

- JSX doesn't allow us to use for loop, instead we need to use the map function.
- Map function example : in Map.js file.

## Files work sequence below :-

## 1. Head.js file

- Contains the menu-item & youtube logo.
- Contains the searchBar section.
- Contains the user account section.
- items-center tailwind class on the main div ⭐
- Called the toggleMenu function of appSlice.js on menu icon.

## 2. Sidebar.js file

- Contains the sidebar menu list of the youtube page.
- Icons attached using **_npm install react-icons_**.
- subscribed to the specific state of the slice to get the state of the toggleMenu functionality. (useSelector)

## Redux Store :-

- install redux toolkit using **_npm i install reduxjs/toolkit_**.
- Slice and Store are made using Toolkit.

- install redux using npm i react-redux.
- Create store in utils folder.
- Create slice.

### Steps for Redux store :-

- Create a store using **_configureStore_**.
- Create a slice using **_createSlice_**.
- Export actions from the slice.
- Enlist the slice to the store.
- Attach the store to the App.js file.

## 3. store.js :-

- Created the store using **_configureStore_** from reduxjs-toolkit.

## 4. appSlice.js :-

- Created the slice using createSlice
- Slice is model that contains the actions and functions, these functions are listed on the app store and used accordingly.
- toggleSlice : Function for the menu-icon toglling.

## 5. Button.js :-

- Contains the suggestion buttons.

## 6. ButtonList.js :-

- Rendering the suggested button list.

## 7. VideoContainer.js :-

- Contains the videos, api call of the videos (youtube-api) is done using useEffect hook of react.

- Enable the API:

_Go to the YouTube Data API v3 page in your Google Cloud Console._
_Make sure you're logged in with the correct Google account._
_Select the project (or the relevant project you’re working on)._
_Click Enable if the API is not enabled already._

## 8. VideoCard.js :-

- For the video container section.
- Extracted out snippets and statistics.

## 9. WatchPage.js :-

- ### Routing Setup :-

- - install routing toolkit using **_npm i react-router-dom_**.

- ### Steps for Routing use :-

- - Create appRouter using _createBrowserRouter_.
- - _createBrowserRouter_ takes array of paths.
- - Provide **_RouterProvider_** to the element in the app.js file.

## 10. Body.js :-

- Either be my body will render or the watch video section will render.
- Contains the Routing, Redux store setup.
- Children array for the conditional rendering of teh page by using outlet where teh conditions meant to be met.

### Configuring the Outlet :-

- create children array : an array that contains the element that renders according to the path.
