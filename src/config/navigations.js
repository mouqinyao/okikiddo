import { createStackNavigator, createAppContainer } from 'react-navigation';

import {
    EventsScreen,
    HomeScreen,
    LoginScreen,
    RegisterScreen
} from '../screens';

const AppNavigator = createStackNavigator({
    Events: {
        screen: EventsScreen
    },
    Home: {
        screen: HomeScreen
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
},
{
    initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);
