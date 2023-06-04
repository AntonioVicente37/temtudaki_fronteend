import { StyleSheet, View } from 'react-native';
import { Text, Input, Button, Icon } from '@rneui/themed';
import { useState } from 'react';
import styles from '../style/MainStyle';

export default function Login({navigation}) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);

    const entrar = () => {
       navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
       })
    }

    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
            <Text h4>Entre no Temtudaki!</Text>
            <Input
                placeholder="E-mail"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
            />
            <Input
                placeholder="Sua Senha"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
            />
            <Button
                icon={
                    <Icon
                        name="check"
                        color="white" />
                }
                onPress={() => entrar()}
                title="Entrar"
            />
        </View>
    );
}


const specificStyle = StyleSheet.create({
    specificContainer: {
        //  backgroundColor: "#000"
    }
})
