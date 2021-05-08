import { StyleSheet, Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';

import COLORS from '../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height: height * .1,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    flex: 0.89,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(21),
    fontWeight: '600',
    color: COLORS.orange,
  },
  addTouch: {
    width: 45,
    paddingVertical: '7%',
    position: 'absolute',
    right: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.orange,
  },
  add: {
    fontSize: scale(14),
    fontWeight: '500',
    color: COLORS.orange,
  },
});

export default styles;
