import {StyleSheet} from 'react-native';
import {BASE_COLOR} from '@config';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: BASE_COLOR.primaryColor,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto',
    color: 'white',
    // textAlign: 'center',
    flex: 1,
    textAlignVertical: 'center',
    fontSize: 16,
  },
});

export default styles;
