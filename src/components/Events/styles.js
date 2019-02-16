import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
