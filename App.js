/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const randomValue = () => {
  let random = Math.random();
  alert (Math.floor(random * 10));
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Generator random number</Text>
        <Button
          title="Get a random numbe"
          onPress={randomValue}
        />
      </View>
    );
  }
}
