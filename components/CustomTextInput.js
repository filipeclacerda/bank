import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {  Button, TextInput } from 'react-native-paper';
import { sizes } from '../utils/sizes';
import { VerifyFill } from './Bank';

const CustomTextInput = ({label, type}) => {

    const {setNome, setIdade, nome, idade} = useContext(VerifyFill);

    return (
        <View>
            <Text style={styles.label}>{label}:</Text>
            <TextInput
                style={styles.textInput}
                label={label}
                value={(label == "Idade")?idade:nome}
                mode="outlined"
                keyboardType={(type)?type:'default'}
                onChangeText={(label == "Idade")?setIdade:setNome}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    textInput:{
        height: sizes.button.default,
        width: 330,
        marginBottom: sizes.spacing.medium,
    },
    label:{
        fontWeight: '100',
        fontSize: sizes.font.medium,
        alignSelf: 'flex-start',
    },
})

export default CustomTextInput;