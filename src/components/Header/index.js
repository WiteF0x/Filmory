import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import COLORS from '../../constants/colors';
import styles from './styles';

const Header = ({ onPress, title, add, back }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        onPress={back || onPress}
      >
        <Icon
          name={back ? 'arrow-back-outline' : 'menu-outline'}
          color={COLORS.orange}
          size={35}
        />
      </TouchableOpacity>
      <View style={styles.center}>
        <Text style={styles.title}>{ title }</Text>
      </View>
      { add && (<TouchableOpacity
        activeOpacity={0.7}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        onPress={add}
        style={styles.addTouch}
      >
        <Text style={styles.add}>Add</Text>
      </TouchableOpacity>)}
    </View>
  );
};

export default Header;
