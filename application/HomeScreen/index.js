import React, { Component } from 'react';
import { View } from 'react-native';

import HomeScreenView from './homeScreenView';
import styles from './styles';

type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreenView />
      </View>
    );
  }
}
