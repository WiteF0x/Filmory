import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: COLORS.orange,
  },
});

export default styles;
