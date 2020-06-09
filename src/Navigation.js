import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Pay from './pages/Pay';

import PayButton from './components/PayButton';

const Tab = createBottomTabNavigator();
const icons = {
  Home: {
    name: 'home',
  },
  Wallet: {
    name: 'credit-card',
  },
  Notifications: {
    name: 'notifications',
  },
  Settings: {
    name: 'settings',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }
          const {name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#FFF',
        inactiveTintColor: '#92929C',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Carteira',
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Pay}
        options={{
          title: 'Notificação',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Pay}
        options={{
          title: 'Ajustes',
        }}
      />
    </Tab.Navigator>
  );
}
