import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import COLORS from '../../../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '5%',
  },
  pickImage: {
    width: '100%',
    height: verticalScale(100),
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.light_orange,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(16),
  },
  showRow: {
    width: '100%',
    alignItems: 'flex-end',
  },
  showOriginalTouch: {
    marginBottom: 7,
  },
  showOriginal: {
    color: COLORS.orange,
  },
  image: {
    width: '100%',
    height: verticalScale(100),
    borderRadius: 5,
  },
  imageTouch: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(16),
  },
  ratingRow: {
    flexDirection: 'row',
  },
  ratingLabel: {
    fontSize: scale(14),
    fontWeight: '500',
    color: COLORS.orange,
    marginBottom: verticalScale(13),
    marginTop: verticalScale(16),
  },
  ratingContainer: {
    width: 40,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(16),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.orange,
  },
  rating: {
    fontSize: scale(16),
    fontWeight: '500',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width,
    // flex: 1,
    marginTop: verticalScale(21),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomTouch: {
    width: width * .9,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: COLORS.black,
    borderColor: COLORS.orange,
  },
  create: {
    fontSize: scale(18),
    fontWeight: '600',
    color: COLORS.orange,
  },
  dateContainer: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 13,
    borderColor: COLORS.orange,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  animatedDate: {
    width: '100%',
    marginTop: verticalScale(21),
    marginBottom: verticalScale(16),
  },
  date: {
    fontSize: scale(15),
    color: COLORS.orange,
  },
  dateLabel: {
    fontWeight: '500',
    color: COLORS.orange,
    fontSize: scale(12),
  },
  contentContainerStyle: {
    paddingBottom: 135,
  },
  arrow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
