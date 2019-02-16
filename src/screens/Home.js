import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

class HomeScreen extends Component {
    static welcomeMessage = {

    }

    render() {
        // eslint-disable-next-line
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Register"
                    onPress={() => navigate('Register')}
                />
                <Button
                    title="Go to Login"
                    onPress={() => navigate('Login')}
                />
                <Button
                    title="Go to Events"
                    onPress={() => navigate('Events')}
                />
            </View>
        );
    }
}

HomeScreen.ropTypes = {
    navigation: PropTypes.object.isRequired
};

export { HomeScreen };
