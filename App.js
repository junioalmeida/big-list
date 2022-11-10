import { StatusBar } from 'expo-status-bar';
import { LogBox, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import Items from './components/Items';
import NavBar from './components/NavBar';
import Report from './components/Report';
import Category from './components/Category';
import Selection from './components/Selection'
import styles from './styles/styles';
import Product from './components/Product';
import { useState } from 'react';
import AppContext from './AppContext';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createNativeStackNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  const [productId, setProductId] = useState();
  const [categoryId, setCategoryId] = useState();

  const [products, setProducts] = useState(/*[
    { id: 1, name: 'Celular', price: 1541.14, valid: null, stored: 300, codCategory: 1 },
    { id: 2, name: 'Sofá', price: 1541.14, valid: null, stored: 90, codCategory: 2 },
    { id: 3, name: 'Televisão', price: 1541.14, valid: null, stored: 40, codCategory: 2 },
    { id: 4, name: 'Guarda-roupas', price: 1541.14, valid: null, stored: 30, codCategory: 2 },
    { id: 5, name: 'Mesa', price: 1541.14, valid: null, stored: 50, codCategory: 2 },
    { id: 6, name: 'Tablet', price: 1541.14, valid: null, stored: 10, codCategory: 1 },
    { id: 7, name: 'Maçã', price: 1541.14, valid: new Date('2023-09-20'), stored: 100, codCategory: 3 },
    { id: 8, name: 'Laranja', price: 1541.14, valid: new Date('2023-09-20'), stored: 200, codCategory: 3 },
    { id: 9, name: 'Melão', price: 1541.14, valid: new Date('2023-09-20'), stored: 50, codCategory: 3 },
  ]*/);

  const [categories, setCategories] = useState(/*[
    { id: 1, name: "Eletrônicos", color: COLORS.pinkCategory },
    { id: 2, name: "Móveis", color: COLORS.yellowCategory },
    { id: 3, name: "Alimentação", color: COLORS.greenCategory }
  ]*/);

  const appData = {
    productId: productId,
    categoryId: categoryId,
    products: products,
    categories: categories,
    setProductId,
    setCategoryId,
    setProducts,
    setCategories,
  };

  return (
    <AppContext.Provider value={appData}>
      <NavigationContainer theme={Theme}>
        <View style={styles.app}>
          <View style={styles.content}>
            <Header />
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Items">
              <Stack.Screen
                name="Items"
                component={Items} />

              <Stack.Screen
                name="Report"
                component={Report} />

              <Stack.Screen name="Category" component={Category} />

              <Stack.Screen name="Product" component={Product} />

              <Stack.Screen name="Selection" component={Selection} />

            </Stack.Navigator>
            <NavBar />
          </View>
          <StatusBar style="light" />
        </View>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
