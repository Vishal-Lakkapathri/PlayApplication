import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type Props = {
  item: Object,
  onSelectedCharacter: () => any,
}

const ListItem = ({ item, onSelectedCharacter }: Props) => (
  <TouchableOpacity
    style={{ alignItems: 'flex-start' }}
    // onPress={onSelectedCharacter(item.name)}
    onPress={onSelectedCharacter(item.item)}
  >
    <Text style={styles.listItems}>{item.item.name}</Text>
  </TouchableOpacity>);

export default ListItem;
