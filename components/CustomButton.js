import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {  Button } from 'react-native-paper';

const CustomButton = ({text, color, onPress}) => {
    const colorStyle = {
        backgroundColor: (color)?color:'#712791'
    }
    return (
        <Button style={[styles.button, colorStyle]} mode="contained" onPress={onPress}>
                {text}
        </Button>
    )
}
const styles = StyleSheet.create({
    button:{
        marginVertical: 8,
        borderRadius: 25,
        width: 250,
      },
})

export default CustomButton;