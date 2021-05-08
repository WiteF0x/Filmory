import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: scale(12),
    color: COLORS.orange,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    height: 45,
    marginTop: 13,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.orange,
    paddingHorizontal: '5%',
    color: COLORS.orange,
  },
});

export default styles;
