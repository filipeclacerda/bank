import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import {  Button, TextInput } from 'react-native-paper';
import { sizes } from '../utils/sizes';
import { VerifyFill } from './Bank';

const CustomTextInput = ({label, type}) => {

    const {setNome, setIdade} = useContext(VerifyFill);

    return (
        <TextInput
            style={styles.textInput}
            label={label}
            mode="outlined"
            keyboardType={(type)?type:'default'}
            onChangeText={(label == "Idade")?setIdade:setNome}
            />
    )
}
const styles = StyleSheet.create({
    textInput:{
        height: sizes.button.default,
        width: 330,
        marginBottom: sizes.spacing.medium,
    },
})

export default CustomTextInput;