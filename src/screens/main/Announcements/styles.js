import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import COLORS from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center'
  },
  card: {
    width: width * .9,
    borderRadius: 5,
    backgroundColor: COLORS.black,
    borderWidth: 0.5,
    borderColor: COLORS.light_orange,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: verticalScale(21),
  },
  cardsMargin: {
    marginBottom: verticalScale(21),
  },
  imageView: {
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginBottom: 10,
  },
  rating: {
    fontSize: scale(12),
    fontWeight: '600',
    color: COLORS.light_orange,
  },
  info: {
    flex: 1,
    // height: '100%',
    justifyContent: 'space-between',
    marginLeft: scale(21),
  },
  title: {
    fontSize: scale(18),
    fontWeight: '500',
    color: COLORS.orange,
  },
  description: {
    fontSize: scale(14),
    color: COLORS.light_orange,
    marginTop: 7,
  },
  digitStyle: {
    backgroundColor: COLORS.orange,
  },
  digitTxtStyle: {
    color: COLORS.black,
  },
  timeLabelStyle: {
    color: COLORS.light_orange,
  },
  releaseDate: {
    fontSize: scale(14),
    color: COLORS.orange,
    marginTop: 7,
  },
  countContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 7,
  },
  swipeout: {
    borderRadius: 5,
    backgroundColor: COLORS.black,
  },
  delete: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
