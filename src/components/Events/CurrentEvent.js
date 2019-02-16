import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const CurrentEvent = () => {
    return (
        <View style={styles.eventsBlock}>
            <View style={styles.eventsLeftDot} />
            <View style={styles.eventsContent}>
                <Text style={styles.eventsTitle}>2019/02/14</Text>
                <Text style={styles.eventsSubTitle}>返校日</Text>
                <Text style={styles.eventsTitle}>待办事项： 宝宝注册信息表</Text>
            </View>
            <View>
                <Text style={styles.eventsRight}>展开</Text>
            </View>
        </View>
    );
};

export default CurrentEvent;
