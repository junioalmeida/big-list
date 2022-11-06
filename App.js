import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './components/Header';
import Items from './components/Items';
import NavBar from './components/NavBar';
import Product from './components/Product';
import Report from './components/Report';
import Selection from './components/Selection';
import { COLORS } from './styles/Colors';
import styles from './styles/styles';

export default function App() {
  const products = [
    {id: 1, name: 'Celular', price: 1541.14, valid: null, stored: 300, codCategory: 1},
    {id: 2, name: 'Sofá', price: 1541.14, valid: null, stored: 90, codCategory: 2},
    {id: 3, name: 'Televisão', price: 1541.14, valid: null, stored: 40, codCategory: 2},
    {id: 4, name: 'Guarda-roupas', price: 1541.14, valid: null, stored: 30, codCategory: 2},
    {id: 5, name: 'Mesa', price: 1541.14, valid: null, stored: 50, codCategory: 2},
    {id: 6, name: 'Tablet', price: 1541.14, valid: null, stored: 10, codCategory: 1},
    {id: 7, name: 'Maçã', price: 1541.14, valid: new Date('2023-09-20'), stored: 100, codCategory: 3},
    {id: 8, name: 'Laranja', price: 1541.14, valid: new Date('2023-09-20'), stored: 200, codCategory: 3},
    {id: 9, name: 'Melão', price: 1541.14, valid: new Date('2023-09-20'), stored: 50, codCategory: 3},
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
    <View style={styles.app}>
      <View style={styles.content}>
        <Header />
        <Product isEdit={true} valid={new Date()} name={"celular"} price={10} stored={10} codCategory={1}/>
        <NavBar />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
