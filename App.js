import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddEventScreen } from './AddEventScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This will be our Dev Club Free Food Application!</Text>
      <AddEventScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
