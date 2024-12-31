import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return(
    <Drawer.Navigator 
      screenOptions={{
        headerStyle: {backgroundColor:'#351401'}, // başlık arka planı
        headerTintColor:'white',
        sceneStyle:{backgroundColor:'#3f2f25'}, // sayfa arka planı  , stack navigator'da ismi contentStyle
        drawerContentStyle:{backgroundColor:'#351401'},
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:'#351401',
        drawerActiveBackgroundColor:'#e4baa1'
    }}
    >
      <Drawer.Screen name='Categories' 
      component={CategoriesScreen} 
      options={{
        title:'All Categories',
        drawerIcon: ({color, size}) => (
          <Ionicons name='list' color={color} size={size} />
        )
        }} />
      <Drawer.Screen name='Favorites' component={FavoriteScreen} 
      options={{
        drawerIcon: ({color, size}) => (
          <Ionicons name='star-outline' color={color} size={size} />
        )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style='light' />
  <FavoritesContextProvider>
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {backgroundColor:'#351401'}, // başlık arka planı
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#3f2f25'} // sayfa arka planı
        }}
      >
        <Stack.Screen name='DrawerScreen' component={DrawerNavigator} options={{headerShown:false}}/>
        <Stack.Screen name='MealsOverviewScreen' component={MealsOverviewScreen} options={{}}/>
        <Stack.Screen name='MealDetailScren' component={MealDetailScreen}  options={{title:'About the meal'}} />
      </Stack.Navigator>
    </NavigationContainer>
  </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
