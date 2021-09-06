import { Alert, Platform } from "react-native";

const showAlert = (nome, idade, genero, renda, estudante) =>{

    if(Platform.OS == 'web'){
        alert("Sucesso! \n Conta criada \n\nNome:" + nome + "\nIdade: " + idade + "\nGênero: " + genero + "\nRenda: R$" + renda + "\nConta de Estudante: " + estudante);

    }else{
            Alert.alert(
                "Sucesso!",
                "Conta criada \n\nNome:" + nome + "\nIdade: " + idade + "\nGênero: " + genero + "\nRenda: R$" + renda + "\nConta de Estudante: " + estudante,

                [
                  {
                    text: "Ok",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                ]
            )
        
    }
}

export default showAlert;