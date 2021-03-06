import React, {createContext, useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, Switch, Button } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import CustomButton from './CustomButton'
import CustomTextInput from './CustomTextInput';
import showAlert from './Alert'
import {sizes} from '../utils/sizes';
import { colors } from '../utils/colors';
import { Dimensions } from 'react-native';


export const VerifyFill = createContext();

const Bank = () =>{
    const [genero, setgenero] = useState('Masculino');
	const [estudante, setSwitch] = useState(false);
    const [renda, setRenda] = useState(0);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
 
    const changeRenda = useCallback((renda) => {
        setRenda(Math.floor(renda))
      }, []);


    const handlerOpenAccount = () => {
        if(nome && idade && renda>0){
            showAlert(nome, idade, genero, renda, (estudante)?"Ativado":"Desativado",true);
        }else{
            showAlert(nome, idade, genero, renda, estudante,false);
        }
    }
    const handlerResetButton = () =>{
        setRenda(0);
        setgenero('Masculino');
        setSwitch(false);
        setNome('');
        setIdade('');
    }

    return (        
        <View style={styles.containerMini}>
            <Text style={styles.titulo}>Native Bank</Text>
            <VerifyFill.Provider value={{setNome, setIdade, nome, idade}}>                
                <CustomTextInput label="Nome"/>
                <CustomTextInput label="Idade" type="numeric"/>
                <View>
                    <Text style={styles.label}>Gênero:</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={genero}
                        onValueChange={(itemValue) =>
                            setgenero(itemValue)
                        }>
                        <Picker.Item label="Masculino" value="Masculino" />
                        <Picker.Item label="Feminino" value="Feminino" />
                        <Picker.Item label="Outro" value="Outro" />
                    </Picker>                
                    <Text style={styles.label}>Renda Mensal: R$ {renda}</Text>
                    <View style={styles.sliderView}>
                        <Slider
                            style={{width: 330, height: 5, flex: 1}}
                            minimumValue={0}
                            value={renda}
                            maximumValue={3000}	
                            thumbTintColor={colors.basic.purple}		
                            minimumTrackTintColor={colors.basic.lightpurple}
                            maximumTrackTintColor={colors.basic.lightgrey}
                            onValueChange={changeRenda}
                        />
                    </View>
                    <View style={styles.switchView}>
                        <Text style={styles.label}>Estudante:</Text>
                        <Switch style={styles.switch} value={estudante} color={colors.basic.purple} onValueChange={setSwitch}/>
                    </View>
                </View>
                <CustomButton text="Abrir conta" onPress={() => handlerOpenAccount()}/>
                <CustomButton text="Resetar" color="#c799ff" onPress={() => handlerResetButton()}/>
            </VerifyFill.Provider>

        </View>
    )
}
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    titulo: {
        marginBottom: 30,
        fontSize: sizes.font.xlarge,
    },
    picker:{
        width: 330,
        minHeight: sizes.button.default,
        padding: sizes.spacing.medium,
        marginVertical: sizes.spacing.medium,
        marginBottom: 15,
    },
    label:{
        fontWeight: '100',
        fontSize: sizes.font.medium,
        alignSelf: 'flex-start',
    },
   
    containerMini:{
      width: windowWidth - 30,  
      borderRadius: 23,
      padding: sizes.spacing.xlarge,
      margin: sizes.spacing.xlarge,
      backgroundColor: colors.basic.white,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sliderView:{
        height:sizes.button.default,
        marginVertical: sizes.spacing.small,
    },
    switch:{
      alignSelf: 'flex-start',
      marginLeft: sizes.spacing.medium,
    },
    switchView:{
        textAlign: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        marginBottom: sizes.spacing.xxlarge
    }
  });
  
  export default Bank;