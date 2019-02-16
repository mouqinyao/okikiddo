import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const FutureEvent = () => {
    return (
        <View>
            <Text style={styles.eventsHeader}>下一日程</Text>
            <View>
                <View style={[styles.eventsBlock, styles.eventsBlockFlexStart]}>
                    <View style={styles.eventsLeftOdd} />
                    <View style={styles.eventsContent}>
                        <Text style={styles.eventsTitle}>2019/01/28 - 02/13</Text>
                        <Text style={styles.eventsSubTitle}>寒假，欢度春节</Text>
                    </View>
                    <View>
                        <Text style={styles.eventsRight}>8</Text>
                    </View>
                </View>
                <View style={[styles.eventsBlock, styles.eventsBlockFlexStart]}>
                    <View style={styles.eventsLeftEven} />
                    <View style={styles.eventsContent}>
                        <Text style={styles.eventsTitle}>2019/02/24 - 02/25</Text>
                        <Text style={styles.eventsSubTitle}>老师家长联合会</Text>
                    </View>
                    <View style={styles.eventsRight}>
                        <Text style={styles.eventsRight}>6</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default FutureEvent;
