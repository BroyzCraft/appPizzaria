import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import Menu from './Screens/Menu';
import Products from './Screens/Products';

const Tab = createBottomTabNavigator();

const namePizzaria = 'Pizzaria do Zé'

export default props => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName='Menu'
                screenOptions={{
                    headerTitleAlign: 'center',
                    tabBarStyle: {
                        paddingBottom: 5,
                        paddingTop: 5,
                        backgroundColor: '#121212'  
                    },
                    tabBarActiveTintColor: 'red'
                }}
            >
                <Tab.Screen 
                    name="Cardapio" 
                    component={Products}
                    options={{
                        headerTitle: namePizzaria,
                        headerStyle: {
                            backgroundColor: '#F33601',
                        },
                        headerTintColor: '#fff',
                        tabBarIcon: ({ size, color}) => (
                            <Ionicons 
                                name='pizza-outline' 
                                size={20} 
                                color={color} 
                            />
                        )
                    }}
                />
                <Tab.Screen 
                    name="Menu" 
                    component={Menu}
                    options={{
                        headerTitle: namePizzaria,
                        headerStyle: {
                            backgroundColor: '#F33601',
                        },
                        headerTintColor: '#fff',
                        tabBarIcon: ({ size, color}) => (
                            <Ionicons 
                                name='grid-outline' 
                                size={20} 
                                color={color} 
                            />
                        )
                    }}
                />
                <Tab.Screen 
                    name="Pedidos" 
                    component={Menu}
                    options={{
                        headerTitle: namePizzaria,
                        headerStyle: {
                            backgroundColor: '#F33601',
                        },
                        headerTintColor: '#fff',
                        tabBarIcon: ({ size, color}) => (
                            <Ionicons 
                                name='list-outline' 
                                size={20} 
                                color={color} 
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})