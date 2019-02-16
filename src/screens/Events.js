import React from 'react';
import { StyleSheet, View } from 'react-native';

import CalendarUI from '../components/CalendarUI';
import EventsList from '../components/Events';

const styles = StyleSheet.create({
    events: {
        padding: 10
    }
});

const EventsScreen = () => {
    return (
        <View style={styles.styles}>
            <CalendarUI />
            <EventsList />
        </View>
    );
};

export { EventsScreen };
