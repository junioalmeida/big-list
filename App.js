import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './components/Header';
import Items from './components/Items';
import { COLORS } from './styles/Colors';
import styles from './styles/styles';

export default function App() {
  const list = [
    { id: 1, color: COLORS.pinkCategory, nameToShow: "Categoria 1" },
    { id: 2, color: COLORS.yellowCategory, nameToShow: "Categoria 2" },
    { id: 3, color: COLORS.greenCategory, nameToShow: "Categoria 3" }
  ]

  return (
    <View style={styles.app}>
      <View style={styles.content}>
        <Header />
        <Items showList={list}/>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
