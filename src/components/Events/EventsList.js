import React from 'react';
import { Text, View } from 'react-native';

import CurrentEvent from './CurrentEvent';
import FutureEvent from './FutureEvent';

import styles from './styles';

const EventsList = () => {
    return (
        <View style={styles.eventsContainer}>
            <View style={styles.eventsSrollIcon} />
            <Text style={styles.eventsHeader}>待办事项</Text>
            <CurrentEvent />
            <FutureEvent />
        </View>
    );
};

export default EventsList;
