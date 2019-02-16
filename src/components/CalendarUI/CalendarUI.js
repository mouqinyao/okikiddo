import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

import styles from './styles';

const CalendarUI = () => {
    return (
        <View style={styles.calendarContainer}>
            <Calendar
                current="2019-02-16"
            />
        </View>
    );
};

export default CalendarUI;
