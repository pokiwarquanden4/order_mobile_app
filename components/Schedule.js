import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { View } from 'react-native';

function Schedule({ setPage }) {
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.backButton} onPress={() => setPage(undefined)}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} color="red" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Schedule</Text>
            </View>
            <SafeAreaView style={styles.container}>
                <Agenda
                    items={{
                        '2024-05-12': [],
                        '2024-05-13': [{ name: 'Meeting 2', data: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ' }],
                        '2024-05-14': [{ name: 'Meeting 3', data: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ' }],
                        '2024-05-15': [{ name: 'Meeting 4', data: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ' }],
                        '2024-05-16': [{ name: 'Meeting 5', data: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ' }],
                        '2024-05-17': [{ name: 'Meeting 6', data: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ' }]
                    }}
                    renderItem={(item, isFirst) => (
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <Text style={styles.itemText}>{item.data}</Text>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: 500
    },
    item: {
        backgroundColor: 'lightblue',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 25,
        paddingBottom: 20
    },
    itemText: {
        color: 'black',
        fontSize: 16,
    }
});

export default Schedule;