import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Header from './components/Header';
import Items from './components/Items';
import NavBar from './components/NavBar';
import Report from './components/Report';
import Category from './components/Category';
import { COLORS } from './styles/Colors';
import styles from './styles/styles';
import Product from './components/Product';

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
    <NativeRouter>
      <View style={styles.app}>
        <View style={styles.content}>
          <Header />
          <Routes>
            <Route
              path='/'
              element={
                <Items products={products} categories={categories} />
              } />
            <Route
              path='/report'
              element={
                <Report products={products} categories={categories} />
              } />
            <Route
              path='/category'
              element={
                <Category />
              }
              />
            <Route
              path='/product'
              element={
                <Product />
              }
              />
          </Routes>
          <NavBar />
        </View>
        <StatusBar style="light" />
      </View>
    </NativeRouter>
  );
}
