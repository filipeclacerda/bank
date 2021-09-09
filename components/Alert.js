import { Alert, Platform } from "react-native";

const showAlert = (nome, idade, genero, renda, estudante, state) =>{

    let textoAlerta = "Conta criada com sucesso! \n\nNome: " + nome + "\nIdade: " + idade + "\nGênero: " + genero +
    "\nRenda: R$" + renda + "\nConta de Estudante: " + estudante;
    let textoErro = "Por favor, preencha todos os campos.";
    if(!state){
      textoAlerta = textoErro;
    }
    if(Platform.OS == 'web'){
          alert(textoAlerta);
    }else{
            Alert.alert(
                "Alerta!",
                textoAlerta,
                [
                  {
                    text: "Ok",
                    style: "cancel"
                  },
                ]
            )
    }
}

export default showAlert;