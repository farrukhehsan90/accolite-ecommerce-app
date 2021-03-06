import {StyleSheet} from 'react-native';
import {BASE_COLOR} from './color';

export const BASE_STYLE = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1,
  },
  bodyPaddingDefault: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  bodyMarginDefault: {
    marginRight: 20,
    marginLeft: 20,
  },
  textInput: {
    height: 46,
    backgroundColor: BASE_COLOR.fieldColor,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
  },
  safeAreaView: {
    flex: 1,
  },
});
