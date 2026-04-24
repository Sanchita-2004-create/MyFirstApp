// 2 input field inside the card. (Username and Password)
// 2 buttons(One cancel and another sign in)
// Cancel button should be outlined and Sign In button should be TouchableOpacity
// On click on sign in button alert should be displayed as Signed In Successfully.


import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonRow}>

          {/* Cancel Button (Outlined) */}
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              setUsername('');
              setPassword('');
            }}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          {/* Sign In Button */}
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => Alert.alert('Signed In Successfully')}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,

    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cancelButton: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
  },

  cancelText: {
    color: 'black',
  },

  signInButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },

  signInText: {
    color: 'white',
  },
});

export default App1;