import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import Layout from '../../Layout';
import Data from './data.json';
import AsyncStorage from '@react-native-community/async-storage';
import OptionMenu from './OptionMenu';

export default function Store({navigation}) {
  const [state, seState] = useState({
    data: [
      {
        id: 1,
        title: 'Product 1',
        price: '$ 25.00 USD',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      },
      {
        id: 2,
        title: 'Product 2',
        price: '$ 10.13 USD',
        image: 'https://via.placeholder.com/400x200/FA8072/000000',
      },
      {
        id: 3,
        title: 'Product 3',
        price: '$ 12.12 USD',
        image: 'https://via.placeholder.com/400x200/87CEEB/000000',
      },
      {
        id: 4,
        title: 'Product 4',
        price: '$ 11.00 USD',
        image: 'https://via.placeholder.com/400x200/4682B4/000000',
      },
      {
        id: 5,
        title: 'Product 5',
        price: '$ 20.00 USD',
        image: 'https://via.placeholder.com/400x200/008080/000000',
      },
      {
        id: 6,
        title: 'Product 6',
        price: '$ 33.00 USD',
        image: 'https://via.placeholder.com/400x200/40E0D0/000000',
      },
      {
        id: 7,
        title: 'Product 7',
        price: '$ 20.95 USD',
        image: 'https://via.placeholder.com/400x200/EE82EE/000000',
      },
      {
        id: 8,
        title: 'Product 8',
        price: '$ 13.60 USD',
        image: 'https://via.placeholder.com/400x200/48D1CC/000000',
      },
      {
        id: 9,
        title: 'Product 9',
        price: '$ 15.30 USD',
        image: 'https://via.placeholder.com/400x200/191970/000000',
      },
      {
        id: 9,
        title: 'Product 10',
        price: '$ 21.30 USD',
        image: 'https://via.placeholder.com/400x200/7B68EE/000000',
      },
    ],
  });

  const addProductToCart = async (
    itemId,
    itemTitle,
    itemDescription,
    itemPrice,
    itemImg,
  ) => {
    // Alert.alert('Success', 'The product has been added to your cart');
    const userdata = await AsyncStorage.getItem('items');
    let itemsCopy;
    if (userdata) {
      let items = JSON.parse(userdata);
      itemsCopy = [...items];
      itemsCopy.push({
        itemId,
        itemTitle,
        itemDescription,
        itemPrice,
        itemImg,
        itemQuantity: 1,
      });
    } else {
      itemsCopy = [
        {
          itemId,
          itemTitle,
          itemDescription,
          itemPrice,
          itemImg,
          itemQuantity: 1,
        },
      ];
    }
    const key = 'itemImg';

    const arrayUniqueByKey = [
      ...new Map(itemsCopy.map(item => [item[key], item])).values(),
    ];
    console.log('items', arrayUniqueByKey);
    await AsyncStorage.setItem('items', JSON.stringify(arrayUniqueByKey));
    navigation.navigate('Cart');
  };

  const addProductToFavourite = async (
    itemId,
    itemTitle,
    itemDescription,
    itemPrice,
    itemImg,
  ) => {
    const userdata = await AsyncStorage.getItem('favourite');
    let itemsCopy;
    if (userdata) {
      let items = JSON.parse(userdata);
      itemsCopy = [...items];
      console.log('khurram', items);
      itemsCopy.push({
        itemId,
        itemTitle,
        itemDescription,
        itemPrice,
        itemImg,
        itemQuantity: 1,
      });
    } else {
      itemsCopy = [
        {
          itemId,
          itemTitle,
          itemDescription,
          itemPrice,
          itemImg,
          itemQuantity: 1,
        },
      ];
    }
    const key = 'itemImg';

    const arrayUniqueByKey = [
      ...new Map(itemsCopy.map(item => [item[key], item])).values(),
    ];
    console.log('items', arrayUniqueByKey);
    await AsyncStorage.setItem('favourite', JSON.stringify(arrayUniqueByKey));
    navigation.navigate('Favourite');
  };
  const data = ['All', "women's clothing", 'electronics', 'jewelery'];

  const [value, setValue] = useState('All');

  const onSearch = value => {
    let matchingStrings = [];
    Data.forEach(list => {
      if (
        list.title.toLocaleLowerCase().search(value.toLocaleLowerCase()) > -1
      ) {
        matchingStrings.push(list);
      }
    });
    setProduct(matchingStrings);
  };

  const [product, setProduct] = useState(Data);

  return (
    <Layout navigation={navigation}>
      <View style={{margin: 10}}>
        <OptionMenu data={data} setValue={setValue} value={value} />
      </View>
      <View>
        <TextInput
          placeholder="Search products"
          style={{
            backgroundColor: 'white',
            borderRadius: 15,
            margin: 10,
            paddingLeft: 20,
          }}
          onChangeText={text => onSearch(text)}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={product.filter(item => {
            if (value == 'All') {
              return item.category != value;
            } else {
              return item.category == value;
            }
          })}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={post => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View>
                    <Text numberOfLines={1} style={styles.title}>
                      {item.title}
                    </Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Detail', {
                      itemId: item.id,
                      itemTitle: item.title,
                      itemDescription: item.description,
                      itemPrice: item.price,
                      itemImg: item.image,
                    })
                  }>
                  <Image style={styles.cardImage} source={{uri: item.image}} />
                </TouchableOpacity>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity
                        style={styles.socialBarButton}
                        onPress={() =>
                          addProductToCart(
                            item.id,
                            item.title,
                            item.description,
                            item.price,
                            item.image,
                          )
                        }>
                        <Image
                          style={styles.icon}
                          source={{
                            uri: 'https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png',
                          }}
                        />
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>
                          Buy Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity
                        style={styles.socialBarButton}
                        onPress={() =>
                          addProductToFavourite(
                            item.id,
                            item.title,
                            item.description,
                            item.price,
                            item.image,
                          )
                        }>
                        <Image
                          style={styles.icon}
                          source={{
                            uri: 'https://img.icons8.com/color/50/000000/hearts.png',
                          }}
                        />
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: 'white',
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  buyNow: {
    color: 'purple',
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
