import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import COLORS from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: '5%',
  },
  headerTitle: {
    fontSize: scale(40),
    fontWeight: '600',
    color: COLORS.orange,
  },
  title: {
    fontSize: scale(14),
    fontWeight: '500',
    color: COLORS.orange,
  },
  line: {
    width: width * .8,
    borderWidth: .7,
    marginVertical: verticalScale(13),
    borderColor: COLORS.light_orange,
  },
  input: {
    marginVertical: verticalScale(13),
    paddingHorizontal: '4%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.light_orange,
    height: verticalScale(35),
    width: width * .8,
    color: COLORS.orange,
    fontSize: scale(15),
  },
  loginTouch: {
    height: verticalScale(45),
    width: width * .8,
    borderRadius: 5,
    // backgroundColor: COLORS.orange,
    borderColor: COLORS.orange,
    borderWidth: 1,
    marginTop: verticalScale(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.orange,
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  question: {
    color: '#CCCCCC',
  },
  create: {
    color: COLORS.orange
  },
});

export default styles;
