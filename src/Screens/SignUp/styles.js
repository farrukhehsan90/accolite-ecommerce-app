import {StyleSheet} from 'react-native';
import {BASE_COLOR} from '@config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  heading: {
    marginTop: 30,
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Roboto',
    color: 'white',
    alignSelf: 'center',
  },
});

export default styles;
