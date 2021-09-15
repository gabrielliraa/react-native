import 'react-native-gesture-handler'
import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';




import Home from './src/pages/Home/Index';
import Usuarios from './src/pages/Usuarios/Index';
import Clientes from './src/pages/Clientes/Index';
import Login from './src/pages/Login/Index';
import Produtos from './src/pages/Produtos/Index';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Usuarios') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }else if (route.name === 'Produtos') {
              iconName = focused ? 'pricetags-outline' : 'pricetags-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3f64c7',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Tab.Screen name="Usuarios" component={Usuarios} options={{headerShown:false}}/>
        <Tab.Screen name="Produtos" component={Produtos} options={{headerShown:false}}/>
      </Tab.Navigator>
  );
}




export default function App() { 
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          name = 'Home' 
          component = {Tabs}
          options={{headerShown:false}}
        />

        <Stack.Screen 
        name='Usuarios'
        component = {Usuarios}
        options={{headerShown:false}} 
        />

        <Stack.Screen 
        name='Login' 
        component={Login} 
        options={{headerShown:false}} 
        />

        <Stack.Screen 
        name='Produtos' 
        component={Produtos} 
        options={{headerShown:false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
