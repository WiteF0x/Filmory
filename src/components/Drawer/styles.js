import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import COLORS from '../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: scale(16),
    backgroundColor: 'rgba(255, 165, 0, 0.7)',
  },
  profileContainer: {
    marginTop: '9%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  displayName: {
    marginLeft: scale(16),
    fontSize: scale(18),
    color: COLORS.black,
  },
  bottom: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  logOutTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoutIcon: {
    transform: [{ rotate: '180deg' }],
    marginRight: scale(13),
  },
  logoutText: {
    fontSize: scale(15),
    fontWeight: '500',
    color: COLORS.black,
  },
  menuItemsContainer: {
    flex: 1,
    paddingVertical: '20%',
    paddingHorizontal: scale(21),
  },
  menuItemLabel: {
    color: COLORS.black,
    fontSize: scale(16),
    fontWeight: '500',
  },
  item: {
    marginVertical: verticalScale(25),
  },
});

export default styles;
