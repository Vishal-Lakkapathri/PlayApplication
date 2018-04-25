import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../styles';

type Props = {
  +counterValue: number;
};

const Counter = (props: Props) => (
  <View>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Text>{props.counterValue}</Text>
    </View>
    <TouchableOpacity
      onPress={this.decrementCounter}
      style={{ flexDirection: 'row', justifyContent: 'center', }}
    >
      <Text>Reset Counter</Text>
    </TouchableOpacity>
  </View>
);

export default Counter;
