import { StyleSheet, View } from 'react-native';
import { Text, Input, Button, Icon, CheckBox } from '@rneui/themed';
import { useState } from 'react';
import styles from '../style/MainStyle';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState(null);
    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [telefone, setTelefone] = useState(null); 
    const [isSelected, setSelected] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorNome, setErrorNome] = useState(null);
    const [errorCpf, setErrorCpf] = useState(null);
    const [errorTelefone, setErrorTelefone] = useState(null); 

    const validar = () => {
        let error = false;
        setErrorEmail(null);
        setErrorCpf(null);

        const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!re.test(String(email).toLowerCase())){
            setErrorEmail("Preencha o seu e-mail corretamente");
            error = true;
        }
        if(cpf  == null){
            setErrorCpf("Preencha seu CPF");
            error = true;
        }
        return !error
    }

    const salvar = () => {
       if(validar()){
           console.log("Salvou")
       }
    }

    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
            <Text h4>Cadastra-se</Text>
            <Input
                placeholder="E-mail"
                onChangeText={value =>{ 
                    setEmail(value)
                    setErrorEmail(null)
                }}
                keyboardType="email-address"
                errorMessage={errorEmail}
            />

            <Input
                placeholder="Nome"
                onChangeText={value => setNome(value)}
                errorMessage={errorNome}
            />

            <Input
                placeholder="CPF"
                onChangeText={value => {
                    setCpf(value)
                    setErrorCpf(null)
                }}
                keyboardType="number-pad"
                returnKeyType="done"
                errorMessage={ errorCpf }
            />

            <Input
                placeholder="Telefone"
                onChangeText={value => setTelefone(value)}
                keyboardType="phone-pad"
                returnKeyType="done"
                errorMessage={errorTelefone }
            />
            
            <CheckBox
                title="Eu aceito os termos de uso"
                checkedIcon= "check"
                uncheckedIcon="square-o"
                checkedColor="green"
                uncheckedColor="red"
                checked={isSelected}
                onPress={() => setSelected(!isSelected)}
            />

            <Button
                icon={
                    <Icon
                        name="save"
                        size={15}
                        color="white" />
                }
                title="Salvar"
                onPress={() => salvar()}
                buttonStyle={specificStyle.button}
            />
        </View>
    );
}


const specificStyle = StyleSheet.create({
    specificContainer: {
        backgroundColor: "#fff"
    },
    button: {
        width: "100%",
        marginTop: 10
    },
    /* text: {
        marginTop: 50
    } */
})
