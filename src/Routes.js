import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './Screens/Menu';
import Products from './Screens/Products';

const Tab = createBottomTabNavigator();

export default props => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName='Products'
                screenOptions={{
                    headerTitleAlign: 'center'
                }}
            >
                <Tab.Screen 
                    name="Menu" 
                    component={Menu}
                />
                <Tab.Screen 
                    name="Products" 
                    component={Products}
                    options={{
                        headerTitle: 'Pizzaria Maluca',
                        headerStyle: {
                            backgroundColor: '#F33601',
                        },
                        headerTintColor: '#fff',
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