import React from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import { Calendar } from 'react-native-calendars';

const styles = StyleSheet.create({
    events: {
        padding: 10
    },
    calendarContainer: {
        marginBottom: 20
    },
    eventsContainer: {
        marginHorizontal: -10,
        paddingVertical: 30,
        paddingHorizontal: 10,
        backgroundColor: '#e5e5e5',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5
    },
    eventsSrollIcon: {
        position: 'absolute',
        top: 10,
        left: '48%',
        width: 40,
        height: 5,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        textAlign: 'center'
    },
    eventsHeader: {
        marginBottom: 5,
        paddingLeft: 20,
        fontSize: 12,
        color: '#8f8f8f'
    },
    eventsBlock: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        marginBottom: 20,
        paddingVertical: 20,
        paddingLeft: 40,
        paddingRight: 20,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    eventsBlockFlexStart: {
        alignItems: 'flex-start'
    },
    eventsLeftDot: {
        position: 'absolute',
        top: 24,
        left: 20,
        height: 5,
        width: 5,
        borderRadius: 2.5,
        backgroundColor: '#d65f34'
    },
    eventsLeftOdd: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 25,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: '#fdd041'
    },
    eventsLeftEven: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 25,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: '#50cbec'
    },
    eventsContent: {
        flex: 1
    },
    eventsRight: {
        color: '#545454',
        fontSize: 13
    },
    eventUserIcon: {
        height: 10,
        width: 10
    },
    eventsTitle: {
        marginBottom: 5,
        fontSize: 11,
        color: '#686868'
    },
    eventsSubTitle: {
        marginBottom: 10,
        fontSize: 14,
        color: '#545454'
    }
});

const Events = () => {
    return (
        <View style={styles.events}>
            <View style={styles.calendarContainer}>
                <Calendar
                    current="2019-02-16"
                />
            </View>
            <View style={styles.eventsContainer}>
                <View style={styles.eventsSrollIcon} />
                <Text style={styles.eventsHeader}>待办事项</Text>
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
            </View>
        </View>
    );
};

export default Events;
