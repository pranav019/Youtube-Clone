## 1 Project Initialization

- Created the react app using **_npx create-react-app youtube-clone_**.
- Configured Tailwind CSS to the application.

## Files work sequence below :-

## 1. Head.js file

- Contains the menu-item & youtube logo.
- Contains the searchBar section.
- Contains the user account section.
- items-center tailwind class on the main div ⭐

## 2. Sidebar.js file

- Contains the sidebar menu list of the youtube page.
- Icons attached using **_npm install react-icons_**.

### Redux Store :-

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
