import React from 'react';
import { StyleSheet } from 'react-native';
import {  Button, TextInput } from 'react-native-paper';

const CustomTextInput = ({label, type}) => {
    return (
        <TextInput
            style={styles.textInput}
            label={label}
            mode="outlined"
            keyboardType={(type)?type:'default'}
            />
    )
}
const styles = StyleSheet.create({
    textInput:{
        width: 330,
        marginBottom: 15,
    },
})

export default CustomTextInput;