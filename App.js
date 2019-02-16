import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class RegisterScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Register Screen</Text>
				<Button
					title="Go to Login"
					onPress={() => this.props.navigation.navigate('Login')}
				/>
			</View>
		);
	}
}

class LoginScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Login Screen</Text>
			</View>
		);
	}
}

class EventsScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Events Screen</Text>
			</View>
		);
	}
}

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

const styles = StyleSheet.create({
	container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
	}
});

export default createAppContainer(AppNavigator);
