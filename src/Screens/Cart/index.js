import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default function Cart(props) {
  const [state, setState] = useState({
    selectAll: false,
    cartItemsIsLoading: false,
    cartItems: [
      /* Sample data from walmart */
      {
        itemId: '501436323',
        name: 'Power Wheels Dune Racer Extreme',
        itemImg:
          'https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
        color: 'Red',
        qty: 1,
        salePrice: '105',
        checked: 1,
      },
      {
        itemId: '35031861',
        name: 'Better Homes & Gardens Leighton Twin Over Twin Wood Bunk Bed, Multiple Finishes',
        itemImg:
          'https://i5.walmartimages.com/asr/4aedb609-4b61-4593-ad8a-cdc8c88696b1_1.3f505ce3d55db4745cf4c51d559994dc.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
        qty: 1,
        color: 'Green',
        salePrice: '199',
        checked: 0,
      },
      {
        itemId: '801099131',
        name: 'LEGO Star Wars 2019 Advent Calendar 75245 Holiday Building Kit',
        itemImg:
          'https://i5.walmartimages.com/asr/9a8ea1ab-311d-455c-bda8-ce15692a8185_3.208d48e0260f80891d32b351cb116a4b.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
        qty: 1,
        color: 'Blue',
        salePrice: '27.99',
        checked: 1,
      },
      {
        itemId: '42608079',
        name: 'Little Tikes Cape Cottage Playhouse, Tan',
        itemImg:
          'https://i5.walmartimages.com/asr/2654cd64-1471-44af-8b0c-1debaf598cb3_1.c30c481d1ac8fdd6aa041c0690d7214c.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
        color: 'Purple',
        qty: 1,
        salePrice: '129.99',
        checked: 0,
      },
      {
        itemId: '247714372',
        name: 'HP 14" Laptop, Intel Core i3-1005G1, 4GB SDRAM, 128GB SSD, Pale Gold, 14-DQ1038wm',
        itemImg:
          'https://i5.walmartimages.com/asr/b442f6e7-c5e1-4387-9cd9-9205811d4980_1.82b94d1c11dd12a6697bc517219f331e.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
        qty: 1,
        color: 'Black',
        salePrice: '269',
        checked: 1,
      },
    ],
  });

  const getItems = async () => {
    const userdata = await AsyncStorage.getItem('items');
    console.log('userdata', userdata);
    let items = JSON.parse(userdata);
    setState({...state, cartItems: items});
  };
  useEffect(() => {
    getItems();
  }, [props]);

  const selectHandler = (index, value) => {
    const newItems = [...state.cartItems];
    newItems[index]['checked'] = value == 1 ? 0 : 1;
    setState({...state, cartItems: newItems});
  };

  const selectHandlerAll = value => {
    const newItems = [...state.cartItems];
    newItems.map((item, index) => {
      newItems[index]['checked'] = value == true ? 0 : 1;
    });
    setState({
      ...state,
      cartItems: newItems,
      selectAll: value == true ? false : true,
    });
  };

  const deleteHandler = index => {
    Alert.alert(
      'Are you sure you want to delete this item from your cart?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            let updatedCart = state.cartItems;
            updatedCart.splice(index, 1);
            await AsyncStorage.setItem('items', JSON.stringify(updatedCart));
            setState({...state, cartItems: updatedCart});
          },
        },
      ],
      {cancelable: false},
    );
  };

  const quantityHandler = (action, index) => {
    const newItems = [...state.cartItems];

    let currentQty = newItems[index]['itemQuantity'];

    if (action == 'more') {
      newItems[index]['itemQuantity'] = currentQty + 1;
    } else if (action == 'less') {
      newItems[index]['itemQuantity'] = currentQty > 1 ? currentQty - 1 : 1;
    }

    setState({...state, cartItems: newItems});
  };

  const subtotalPrice = () => {
    const {cartItems} = state;
    if (cartItems) {
      return cartItems.reduce(
        (sum, item) =>
          sum + (item.checked == 1 ? item.itemQuantity * item.itemPrice : 0),
        0,
      );
    }
    return 0;
  };

  const styles = StyleSheet.create({
    centerElement: {justifyContent: 'center', alignItems: 'center'},
  });

  const {cartItems, cartItemsIsLoading, selectAll} = state;

  return (
    <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginBottom: 10,
        }}>
        <View style={[styles.centerElement, {width: 50, height: 50}]}>
          <Icon name="ios-cart" size={25} color="#000" />
        </View>
        <View style={[styles.centerElement, {height: 50}]}>
          <Text style={{fontSize: 18, color: '#000'}}>Shopping Cart</Text>
        </View>
      </View>

      {cartItemsIsLoading ? (
        <View style={[styles.centerElement, {height: 300}]}>
          <ActivityIndicator size="large" color="#ef5739" />
        </View>
      ) : (
        <ScrollView>
          {cartItems &&
            cartItems.map((item, i) => (
              <View
                key={i}
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  marginBottom: 2,
                  height: 120,
                }}>
                <View style={[styles.centerElement, {width: 60}]}>
                  <TouchableOpacity
                    style={[styles.centerElement, {width: 32, height: 32}]}
                    onPress={() => selectHandler(i, item.checked)}>
                    <Icon
                      name={
                        item.checked == 1
                          ? 'ios-checkmark-circle'
                          : 'ios-checkmark-circle-outline'
                      }
                      size={25}
                      color={item.checked == 1 ? '#0faf9a' : '#aaaaaa'}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexGrow: 1,
                    flexShrink: 1,
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity style={{paddingRight: 10}}>
                    <Image
                      source={{uri: item.itemImg}}
                      style={[
                        styles.centerElement,
                        {height: 60, width: 60, backgroundColor: '#eeeeee'},
                      ]}
                    />
                  </TouchableOpacity>
                  <View
                    style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
                    <Text numberOfLines={1} style={{fontSize: 15}}>
                      {item.itemTitle}
                    </Text>
                    <Text numberOfLines={1} style={{color: '#8f8f8f'}}>
                      {item.color ? 'Variation: ' + item.color : ''}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{color: '#333333', marginBottom: 10}}>
                      ${item.itemQuantity * item.itemPrice}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        onPress={() => quantityHandler('less', i)}
                        style={{borderWidth: 1, borderColor: '#cccccc'}}>
                        <Icon name="remove" size={22} color="#cccccc" />
                      </TouchableOpacity>
                      <Text
                        style={{
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderColor: '#cccccc',
                          paddingHorizontal: 7,
                          paddingTop: 3,
                          color: '#bbbbbb',
                          fontSize: 13,
                        }}>
                        {item.itemQuantity}
                      </Text>
                      <TouchableOpacity
                        onPress={() => quantityHandler('more', i)}
                        style={{borderWidth: 1, borderColor: '#cccccc'}}>
                        <Icon name="add" size={22} color="#cccccc" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={[styles.centerElement, {width: 60}]}>
                  <TouchableOpacity
                    style={[styles.centerElement, {width: 32, height: 32}]}
                    onPress={() => deleteHandler(i)}>
                    <Icon name="md-trash" size={25} color="#ee4d2d" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </ScrollView>
      )}

      {!cartItemsIsLoading && (
        <View
          style={{
            backgroundColor: '#fff',
            borderTopWidth: 2,
            borderColor: '#f6f6f6',
            paddingVertical: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.centerElement, {width: 60}]}>
              <View style={[styles.centerElement, {width: 32, height: 32}]}>
                <Icon name="ticket" size={25} color="#f0ac12" />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexGrow: 1,
                flexShrink: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>Voucher</Text>
              <View style={{paddingRight: 20}}>
                <TextInput
                  style={{
                    paddingHorizontal: 10,
                    backgroundColor: '#f0f0f0',
                    height: 25,
                    borderRadius: 4,
                  }}
                  placeholder="Enter voucher code"
                  value={''}
                  onChangeText={searchKeyword => {}}
                />
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.centerElement, {width: 60}]}>
              <TouchableOpacity
                style={[styles.centerElement, {width: 32, height: 32}]}
                onPress={() => selectHandlerAll(selectAll)}>
                <Icon
                  name={
                    selectAll == true
                      ? 'ios-checkmark-circle'
                      : 'ios-checkmark-circle-outline'
                  }
                  size={25}
                  color={selectAll == true ? '#0faf9a' : '#aaaaaa'}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexGrow: 1,
                flexShrink: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>Select All</Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingRight: 20,
                  alignItems: 'center',
                }}>
                <Text style={{color: '#8f8f8f'}}>SubTotal: </Text>
                <Text>${subtotalPrice().toFixed(2)}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              height: 32,
              paddingRight: 20,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={[
                styles.centerElement,
                {
                  backgroundColor: '#0faf9a',
                  width: 100,
                  height: 25,
                  borderRadius: 5,
                },
              ]}
              onPress={() => console.log('test')}>
              <Text style={{color: '#ffffff'}}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
