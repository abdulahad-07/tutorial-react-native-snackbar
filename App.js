/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const App = () => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title='Show snackbar' onPress={() => {
        Snackbar.show({
          text: 'Message is marked read.',
          duration: Snackbar.LENGTH_SHORT,
          action: {
            text: 'UNDO',
            onPress: () => {
              Alert.alert('Success', 'Snackbar action')
            }
          }
        })
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
