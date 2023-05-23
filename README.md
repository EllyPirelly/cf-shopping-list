# Shoppinglist App

### What is this about?
A very simple Shoppinglist App for mobile devices (phones) using React Native.
<br>
The App will provide users with the possibility to create shopping lists that can have two items per list. Shopping lists will also be available when user does not have internet connection.
<br>
This Shoppinglist App has been built as a small exercise for Achievement 5 in [Career Foundry's Full-Stack Web Development Program](https://careerfoundry.com/en/courses/become-a-web-developer/). It was the preparation before adding more or less the same features to the [Chat App](https://github.com/EllyPirelly/cf-chat-app).

![Shopping List Android Emulator](/assets/screenshots/screenshot-shopping-list-android-emulator.png)

### Technical requirements
The Shoppinglist App
- must be written in React Native
- must be developed using Expo (Expo CLI and Expo Go App) and Android Studio
- must not have styling
- must authenticate users anonymously via Google Firebase authentication
- shoppinglist items must be stored in Google Firestore database
- shoppinglists must be stored locally

### Feature requirements
Welcome screen:
- on press a user can enter the ShoppingLists screen and is signed up

ShoppingList screen:
- displays a simple form where a user can add a shopping list name and add two items
- a user can add more than one shopping list
- when it is detected that the user is offline, the user still can access already added shopping lists but won't be able to add new ones as the form element to do so won't be rendered

### Languages, Libraries, Frameworks, Tools
- React Native
- [Expo](https://expo.dev/)
  - [Expo CLI](https://docs.expo.dev/get-started/installation/) and Expo Go App
  - [Watchman](https://docs.expo.dev/get-started/installation/#requirements)
- [Android Studio](https://developer.android.com/studio) to - when as in my case developing on MAC - emulate Android devices
- Google Firestore/Firebase

### Heads-up
- at time of writing to use Expo CLI you need to downgrade Node to `16.19.0`

### Global
- `expo-CLI` - to create new projects and start running Expo

### Dependencies
- `expo` - to set up, develop and test React Native Apps
- `firebase` - to enable real-time chat/saving of messages in Chat App (database) and to enable anonymous sign-in
- `react`
- `react-native` - to build apps for Android and iOS quickly with one codebase
- `@react-native-async-storage/async-storage` - to store messages offline
- `@react-native-community/netinfo` - to check if user is on- or offline
- `react-navigation` - third party library to navigate between screens

### Dev Dependencies
- `babel`

### How to run this? - ToDo
With Expo installed
- `npm start` or `expo start`