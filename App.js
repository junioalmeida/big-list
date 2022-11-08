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
import { COLORS } from './styles/Colors';
import styles from './styles/styles';
import Product from './components/Product';

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
  const products = [
    { id: 1, name: 'Celular', price: 1541.14, valid: null, stored: 300, codCategory: 1 },
    { id: 2, name: 'Sofá', price: 1541.14, valid: null, stored: 90, codCategory: 2 },
    { id: 3, name: 'Televisão', price: 1541.14, valid: null, stored: 40, codCategory: 2 },
    { id: 4, name: 'Guarda-roupas', price: 1541.14, valid: null, stored: 30, codCategory: 2 },
    { id: 5, name: 'Mesa', price: 1541.14, valid: null, stored: 50, codCategory: 2 },
    { id: 6, name: 'Tablet', price: 1541.14, valid: null, stored: 10, codCategory: 1 },
    { id: 7, name: 'Maçã', price: 1541.14, valid: new Date('2023-09-20'), stored: 100, codCategory: 3 },
    { id: 8, name: 'Laranja', price: 1541.14, valid: new Date('2023-09-20'), stored: 200, codCategory: 3 },
    { id: 9, name: 'Melão', price: 1541.14, valid: new Date('2023-09-20'), stored: 50, codCategory: 3 },
  ];

  const categories = [
    { id: 1, name: "Eletrônicos", color: COLORS.pinkCategory },
    { id: 2, name: "Móveis", color: COLORS.yellowCategory },
    { id: 3, name: "Alimentação", color: COLORS.greenCategory }
  ];
  const list = [
    { id: 1, color: COLORS.pinkCategory, nameToShow: "Categoria 1" },
    { id: 2, color: COLORS.yellowCategory, nameToShow: "Categoria 2" },
    { id: 3, color: COLORS.greenCategory, nameToShow: "Categoria 3" }
  ]

  return (
    <NavigationContainer theme={Theme}>
      <View style={styles.app}>
        <View style={styles.content}>
          <Header />
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Items">
            <Stack.Screen
              name="Items"
              initialParams={{ products: products, categories: categories }}
              component={Items} />

            <Stack.Screen
              name="Report"
              initialParams={{ products: products, categories: categories }}
              component={Report} />

            <Stack.Screen name="Category" component={Category} />
            
            <Stack.Screen
              name="Product"
              initialParams={{ categories: categories }}
              component={Product} />

            <Stack.Screen name="Sort" component={Selection} />

            <Stack.Screen name="Filter" component={Selection} />

          </Stack.Navigator>
          <NavBar />
        </View>
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}
