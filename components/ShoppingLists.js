import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { collection, addDoc, onSnapshot, query, where } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShoppingLists = ({ db, route, isConnected }) => {
  const { userID } = route.params;
  const [lists, setLists] = useState([]);
  const [listName, setListName] = useState('');
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');

  const addShoppingList = async (newList) => {

    const newListRef = await addDoc(collection(db, 'shoppinglists'), newList);

    if (newListRef.id) {
      setLists([newList, ...lists]);
      Alert.alert(`The list '${listName}' has been added.`);
    } else {
      Alert.alert('Unable to add. Please try again later.');
    }
  }

  let unsubShoppinglists;

  useEffect(() => {
    if (isConnected === true) {
      // unregister current onSnapshot() listener to avoid registering multiple listeners when useEffect code is re-executed
      if (unsubShoppinglists) unsubShoppinglists();
      unsubShoppinglists = null;

      // query conditions
      // whenever it's changed with add, remove or update query, the onSnapshot callback is called
      const q = query(collection(db, 'shoppinglists'), where('uid', '==', userID));
      // code to execute when component mounted or updated
      unsubShoppinglists = onSnapshot(q, (documentsSnapshot) => {
        let newLists = [];
        documentsSnapshot.forEach(doc => {
          newLists.push({ id: doc.id, ...doc.data() })
        });
        cacheShoppingLists(newLists);
        setLists(newLists);
      });
    } else loadCachedLists();


    // Clean up code
    return () => {
      // code to execute when the component will be unmounted
      // checks if unsubShoppingLists is not undefined
      if (unsubShoppinglists) unsubShoppinglists();
    }
    // isConnected prop as a dependency value allows the component to call the callback of useEffect whenever the isConnected props' value changes
  }, [isConnected]);

  const cacheShoppingLists = async (listsToCache) => {
    try {
      await AsyncStorage.setItem('shopping_lists', JSON.stringify(listsToCache));
    } catch (error) {
      console.log(error.message);
    }
  };

  // called if isConnected in useEffect is false
  const loadCachedLists = async () => {
    const cachedLists = await AsyncStorage.getItem('shopping_lists') || [];
    setLists(JSON.parse(cachedLists));
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listsContainer}
        data={lists}
        renderItem={({ item }) =>
          <View style={styles.listItem}>
            <Text >{item.name}: {item.items.join(', ')}</Text>
          </View>
        }
      />
      {(isConnected === true) ?
        <View style={styles.listForm}>
          <TextInput
            style={styles.listName}
            placeholder='List Name'
            value={listName}
            onChangeText={setListName}
          />
          <TextInput
            style={styles.item}
            placeholder='Item #1'
            value={item1}
            onChangeText={setItem1}
          />
          <TextInput
            style={styles.item}
            placeholder='Item #2'
            value={item2}
            onChangeText={setItem2}
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              const newList = {
                uid: userID,
                name: listName,
                items: [item1, item2]
              }
              addShoppingList(newList);
            }}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View> : null
      }

      {Platform.OS === 'ios' ? <KeyboardAvoidingView behavior='padding' /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    borderBottomColor: '#AAA',
    borderBottomWidth: 1,
    flex: 1,
    flexGrow: 1,
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  listForm: {
    backgroundColor: '#CCC',
    flex: 0,
    flexBasis: 275,
    margin: 15,
    padding: 15,
  },
  listName: {
    borderColor: '#555',
    borderWidth: 2,
    fontWeight: '600',
    height: 50,
    marginBottom: 15,
    marginRight: 50,
    padding: 15,
  },
  item: {
    borderColor: '#555',
    borderWidth: 2,
    height: 50,
    marginBottom: 15,
    marginLeft: 50,
    padding: 15,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#FFF',
    height: 50,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default ShoppingLists;
