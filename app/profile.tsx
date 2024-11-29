import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const DUMMY_USER = {
  id: '123456789',
  email: 'test@example.com',
};

export default function Profile() {
  const logOut = () => {
    // Simulate logging out
    router.replace('/sign-in'); // Redirect to the sign-in page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User ID:</Text>
      <Text style={styles.value}>{DUMMY_USER.id}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{DUMMY_USER.email}</Text>

      <Button onPress={logOut} title="Sign Out" color="#1465de" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101112',
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
});
