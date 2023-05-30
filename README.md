# Shoppinglist App

### What is this about?
A very simple Shoppinglist App for mobile devices (phones) using React Native.
<br>
The App will provide users with the possibility to create shoppinglists that can have two items per list. Shoppinglists will also be available when user does not have an internet connection.
<br>
This Shoppinglist App has been built as a small exercise for Achievement 5 in [Career Foundry's Full-Stack Web Development Program](https://careerfoundry.com/en/courses/become-a-web-developer/). It was the preparation before adding more or less the same features to the [Chat App](https://github.com/EllyPirelly/cf-chat-app).

![Shoppinglist on Android Emulator](/assets/screenshots/screenshot-shopping-list-android-emulator.png)

### Technical requirements
The Shoppinglist App
- must be written in [React Native](https://github.com/facebook/react-native)
- must be developed using [Expo (Expo CLI and the Expo Go App)](https://expo.dev/) and [Android Studio](https://developer.android.com/studio)
- must not have styling
- must use [Google Firebase](https://firebase.google.com/) as cloud storage solution
  - Firestore Database to store shoppinglists and shoppinglist items
  - Authentication of users (Anonymous) at first enter
- must use [Expo AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/) to store shoppinglists locally
- must use [Expo NetInfo](https://docs.expo.dev/versions/latest/sdk/netinfo/) to detect network connection
- must enable the user to access previous shoppinglists while being offline
- must disable the user to create new shoppinglists while being offline

### Feature requirements
Welcome screen:
- on press a user can enter the ShoppingLists screen and is signed up

ShoppingList screen:
- displays a simple form where a user can add a shoppinglist name and add two items
- a user can add more than one shoppinglist
- when it is detected that the user is offline, the user still can access already added shoppinglists but won't be able to add new ones as the form element to do so won't be rendered

### Languages, Libraries, Frameworks, Tools
- [React Native](https://github.com/facebook/react-native)
  - JSX
  - JavaScript
- [Expo](https://expo.dev/)
  - [Expo CLI](https://docs.expo.dev/get-started/installation/) and Expo Go App
  - [Watchman](https://docs.expo.dev/get-started/installation/#requirements)
- [Android Studio](https://developer.android.com/studio)
- [Google Firebase](https://firebase.google.com/)
- [Expo AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/)
- [Expo NetInfo](https://docs.expo.dev/versions/latest/sdk/netinfo/)

### Heads-up
At time of writing to use Expo CLI you need to downgrade Node to `16.19.0` <br>
Eventhough [Expo's site is a bit misleading regarding LTS](https://docs.expo.dev/get-started/installation/) if you try latest you will run into an error. <br>
[Also see here.](https://github.com/expo/expo/issues/21026)

### Global
- `expo-CLI` - to create new projects and start running Expo

### Dependencies
- `expo` - to set up, develop and test React Native Apps
- `firebase` - to enable real-time saving of shoppinglists, shoppinglist items, anonymous sign-in
- `react`
- `react-native` - to build apps for Android and iOS quickly with one codebase
- `react-native-safe-area-context`
- `react-native-screens`
- `@react-native-async-storage/async-storage` - to store shoppinglists offline
- `@react-native-community/netinfo` - to check if user is on- or offline
- `react-navigation` - third party library to navigate between screens
- `@react-navigation/native`
- `@react-navigation/native-stack`

### Dev Dependencies
- `babel`

## How to run this?
- as this has been built with Expo, you best have an Expo account and download Expo Go on your mobile device
- it's also beneficial to set up an emulated device via Android Studio
- before cloning check your current Node version and downgrade to `16.19.0`
- after that
  - clone the repo
  - `cd` into project
  - `npm install`
- `expo login` will log you in via terminal
- `expo whoami` will check the currently logged-in account
- `npm start` or `expo start` will start the project (the Metro Bundler)
![Screenshot of Metro Bundler](/assets/screenshots//screenshot-metro-bundler.png)
- on MAC, you do NOT need the "full" XCode version to start the Android or iOS simulator and can hit `n`
- then open your iPhone
- open the Expo Go App
- open the project, this will start the building of files
- `control c` to stop the project from running
- `expo start --offline` to test the app offline