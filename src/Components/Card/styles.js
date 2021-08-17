import {StyleSheet} from 'react-native';
import {BASE_COLOR} from '@config';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: BASE_COLOR.primaryColor,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    backgroundColor: BASE_COLOR.white,
    width: '95%',
    borderRadius: 4,
    marginHorizontal: 10,

    position: 'relative',
  },

  text: {
    fontFamily: 'Roboto',
    color: 'grey',
    textAlign: 'center',
    paddingBottom: 15,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontSize: 24,
  },
  images: {
    width: 1,
    height: 5,
  },
});

export default styles;
