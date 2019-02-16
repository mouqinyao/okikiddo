import { createStackNavigator, createAppContainer } from 'react-navigation';

import RegisterScreen from './src/components/Register/component';
import LoginScreen from './src/components/Login/component';
import EventsScreen from './src/components/Events/component';

const AppNavigator = createStackNavigator({
    Register: {
        screen: RegisterScreen
    },
    Login: {
        screen: LoginScreen
    },
    Events: {
        screen: EventsScreen
    }
},
{
    initialRouteName: 'Events'
});

export default createAppContainer(AppNavigator);
