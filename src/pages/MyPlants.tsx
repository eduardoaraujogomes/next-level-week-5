import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import { Header } from '../components/Header';

import colors from '../styles/colors';

export function MyPlant() {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background
    }
});