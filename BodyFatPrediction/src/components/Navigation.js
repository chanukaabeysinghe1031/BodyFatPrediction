import React from 'react';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MoodDetectionScreen from '../screens/MoodDetectionScreen';
import PredictFatLevelScreen from '../screens/PredictFatLevelScreen';
import WelcomePageScreen from '../screens/WelcomePageScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Welcome' component={WelcomePageScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='MoodDetection' component={MoodDetectionScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='PredictFatLevel' component={PredictFatLevelScreen} options={{headerShown:false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;