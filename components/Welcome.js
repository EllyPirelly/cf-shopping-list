import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { getAuth, signInAnonymously } from 'firebase/auth';

const Welcome = ({ navigation }) => {
  const auth = getAuth();

  // sign-in logic
  const signInUser = () => {
    signInAnonymously(auth)
      .then(result => {
        navigation.navigate('ShoppingLists', { userID: result.user.uid });
        Alert.alert('Signed in successfully!');
      })
      .catch((error) => {
        Alert.alert('Unable to sign in, try later again.');
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Shopping Lists</Text>

      <TouchableOpacity
        style={styles.startButton}
        onPress={signInUser}>
        <Text style={styles.startButtonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 45,
    fontWeight: '600',
    marginBottom: 100,
  },
  startButton: {
    alignItems: 'center',
    backgroundColor: '#000',
    height: 50,
    justifyContent: 'center',
    width: '88%',
  },
  startButtonText: {
    color: '#FFF',
  }
});

export default Welcome;