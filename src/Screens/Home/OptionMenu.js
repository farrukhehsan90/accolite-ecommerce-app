import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
// import SvgUri from 'react-native-svg-uri';

function OptionMenu({data, value, setValue}) {
  const [text, setText] = useState('Select');
  const [hide, setHide] = useState(false);
  const displayItems = () => {
    setHide(!hide);
  };

  const renderItems = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setValue(item);
          setText(item);
          displayItems();
        }}>
        <View style={{paddingLeft: 20, height: 40, justifyContent: 'center'}}>
          <Text>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width: '100%',
          height: 47,
          backgroundColor: '#fff',
          borderRadius: 17,
          paddingLeft: 20,
          paddingRight: 20,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => displayItems()}>
          <Text style={styles.buttonText}>{value}</Text>
          {/* <Image source={require('../assets/Dropdown.png')} style={[styles.buttonImage,{ transform: [{rotate:( !hide ) ? '0deg' : '-180deg'}]}]}/> */}
          {/* <View style={[styles.buttonImage,{ transform: [{rotate:( !hide ) ? '0deg' : '-180deg'}]}]}> */}
          {/* <SvgUri
            width={25}
            height={25}
            source={
              !hide
                ? require('../../Assets/optionMenu/Dropdown.svg')
                : require('../../Assets/optionMenu/Uparrow.svg')
            }
          /> */}
          {/* </View> */}
        </TouchableOpacity>
      </View>
      {hide ? (
        <View style={[styles.optionList]}>
          <FlatList data={data} renderItem={renderItems} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    width: 150,
    alignSelf: 'center',
  },
  buttonImage: {
    alignSelf: 'center',
  },
  optionList: {
    width: '100%',
    top: -5,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    backgroundColor: '#fff',
  },
});

export default OptionMenu;
