import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  +counterValue: number;
};

const Counter = (props: Props) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
    <Text>{props.counterValue}</Text>
  </View>
);

export default Counter;
