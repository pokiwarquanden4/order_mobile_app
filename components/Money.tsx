import React, { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import MoneyTags from './MoneyTags';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Money = ({ setPage }: { setPage: Dispatch<SetStateAction<string | undefined>> }) => {
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <TouchableOpacity onPress={() => setPage(undefined)}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} color="red" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Money</Text>
            </View>
            <ScrollView style={{ height: 480 }}>
                <MoneyTags flag={true}></MoneyTags>
                <MoneyTags flag={false}></MoneyTags>
                <MoneyTags flag={true}></MoneyTags>
                <MoneyTags flag={false}></MoneyTags>
                <MoneyTags flag={true}></MoneyTags>
                <MoneyTags flag={false}></MoneyTags>
                <MoneyTags flag={true}></MoneyTags>
                <MoneyTags flag={false}></MoneyTags>
                <MoneyTags flag={true}></MoneyTags>
                <MoneyTags flag={false}></MoneyTags>
                <MoneyTags flag={true}></MoneyTags>
                <MoneyTags flag={false}></MoneyTags>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

})

export default Money
