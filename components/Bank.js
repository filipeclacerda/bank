import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, Switch, Button } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import CustomButton from './CustomButton'
import CustomTextInput from './CustomTextInput';
import showAlert from './Alert'

const Bank = () =>{
    const [genero, setgenero] = useState('m');
	const [estudante, setSwitch] = useState(false);
    const [renda, setRenda] = useState(0);
    const [nome, setNome] = useState(undefined);
    const [idade, setIdade] = useState(undefined);

	// useEffect(() => {
	// 	setIntRenda(Math.floor(renda))
	// }, [renda])

    const changeRenda = useCallback((renda) => {
        setRenda(Math.floor(renda))
      }, []);

    return (
        <View style={styles.containerMini}>
            <Text style={styles.titulo}>Cadastro do Banco</Text>
            <Text style={styles.label}>Nome:</Text>
            <CustomTextInput label="Nome"/>
            <Text style={styles.label}>Idade:</Text>
            <CustomTextInput label="Idade" type="numeric"/>
            <Text style={styles.label}>Gênero:</Text>
            <Picker
                style={styles.picker}
                selectedValue={genero}
                onValueChange={(itemValue) =>
                    setgenero(itemValue)
                }>
                <Picker.Item label="Masculino" value="m" />
                <Picker.Item label="Feminino" value="f" />
                <Picker.Item label="Outro" value="o" />
            </Picker>
            <Text style={styles.label}>Renda Mensal: R$ {renda}</Text>
            <View style={styles.sliderView}>
                <Slider
                    style={{width: 330, height: 5, flex: 1}}
                    minimumValue={0}
                    maximumValue={3000}				
                    minimumTrackTintColor="#808080"
                    maximumTrackTintColor="#c9c9c9"
                    onValueChange={changeRenda}
                />
            </View>
            <View style={styles.switchView}>
                <Text style={styles.label}>Estudante:</Text>
                <Switch style={styles.switch} value={estudante} onValueChange={setSwitch}/>
            </View>
            <CustomButton text="Abrir conta" onPress={() => showAlert(nome, idade, genero, renda, estudante)}/>
            <CustomButton text="Resetar" color="#c799ff"/>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
        marginBottom: 30,
        fontSize: 40
    },

    picker:{
        width: 330,
        minHeight: 56,
        padding: 8,
        marginVertical: 6,
        marginBottom: 15,
    },
    label:{
        fontWeight: '100',
        fontSize:17,
        alignSelf: 'flex-start',
    },
    containerMini:{
      flex: 0.9,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sliderView:{
        height:56,
        marginVertical:6
    },

    buttonReset:{
      backgroundColor: '#c799ff',
      marginVertical: 12,
      borderRadius: 25,
      width: 250,
    },
    switch:{
      alignSelf: 'flex-start',
      marginLeft: 10,
    },
    switchView:{
        textAlign: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        marginBottom: 12
    }
  });
  
  export default Bank;