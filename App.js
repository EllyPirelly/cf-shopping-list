import { useEffect } from "react";
import { Alert, LogBox } from 'react-native';
// native navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNetInfo } from "@react-native-community/netinfo";
// firebase
import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";
import ShoppingLists from './components/ShoppingLists';
import Welcome from './components/Welcome';

LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const Stack = createNativeStackNavigator();

const App = () => {
  const connectionStatus = useNetInfo();
  // firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBN_SsxgUkruSM1pBU4utlDDrsz_Ycrblo",
    authDomain: "shopping-list-5b36d.firebaseapp.com",
    projectId: "shopping-list-5b36d",
    storageBucket: "shopping-list-5b36d.appspot.com",
    messagingSenderId: "341202090269",
    appId: "1:341202090269:web:9e21a3e2501855ea02c9f4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
    // if the value of the dependency array changes, the useEffect code will be re-executed
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />

        <Stack.Screen
          name="ShoppingLists"
        >
          {props => <ShoppingLists
            isConnected={connectionStatus.isConnected}
            db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
