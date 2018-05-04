import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

type Props = {
  +incrementCounter: () => any,
  +decrementCounter: () => any,
}

const CounterButtons = (props: Props) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
    <TouchableOpacity onPress={props.incrementCounter}>
      <Text>Increment Counter</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.decrementCounter}>
      <Text>Decrement Counter</Text>
    </TouchableOpacity>
  </View>
);

export default CounterButtons;
