import { StatusBar } from 'expo-status-bar';
import { LogBox, Text, TouchableOpacity, View } from 'react-native';
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
import { useEffect, useState } from 'react';
import AppContext from './AppContext';
import * as LocalAuthentication from 'expo-local-authentication';

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
  const [compatible, setCompatible] = useState(false);
  const [authenticable, setAuthenticable] = useState(false);
  const [athenticated, setAthenticated] = useState(false);

  const [productId, setProductId] = useState(1);
  const [categoryId, setCategoryId] = useState(1);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [initialized, setInitialized] = useState(false);

  /**
   * Estados e funções que serão expostas no contexto da aplicação
   */
  const appData = {
    productId: productId,
    categoryId: categoryId,
    products: products,
    categories: categories,
    initialized,
    setProductId,
    setCategoryId,
    setProducts,
    setCategories
  };

  /**
   * Função que verifica se o dispositivo é compatível com LocalAuthentication
   */
  async function checkCompatibility() {
    let comp = await LocalAuthentication.hasHardwareAsync();
    if (comp) setCompatible(true);
    let aut = await LocalAuthentication.isEnrolledAsync();
    if (aut) setAuthenticable(true);
  }

  /**
   * Função que efetua a autenticação do usuário
   */
  async function authenticate() {
    let auted = await LocalAuthentication.authenticateAsync({
      promptMessage: "Autorização",
    });
    if (auted.success) setAthenticated(true);
  }

  /**
   * Verifica as alterações que ocorrem no estado do component App e faz as chamadas da funções de verificar compatibilidade, além de definir a inicialização do componente como true.
   */
  useEffect(() => {
    checkCompatibility();
    setInitialized(true);
  }, [])

  /**
   * Render do hook.
   */
  return (
    <AppContext.Provider value={appData}>
      <NavigationContainer theme={Theme}>
        {!compatible || !authenticable || athenticated ? (
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
        ) : (
          <View style={styles.login}>
            <Text style={styles.loginTitle}>Big List</Text>
            <TouchableOpacity onPress={authenticate}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Entrar</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </NavigationContainer>
    </AppContext.Provider>
  );
}
