import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TextInput, Alert } from 'react-native';
import {Header} from '../Header/header'
import {styles} from './formStyles'


export default function Form(){
    return(
        <View style={styles.container}>
            <Header/>
            <Text style={styles.text}>Nome</Text>
            <TextInput style={styles.textArea} />
            <Text style={styles.text}>Telefone</Text>
            <TextInput style={styles.textArea} keyboardType='phone-pad' />
            <Text style={styles.text}>Localização</Text>
            <TextInput style={styles.textLocation} multiline={true} />
            <Text style={styles.text}>Problema</Text>
            <TextInput style={styles.textProblem} multiline={true} />
            <Pressable onPress={()=> Alert.alert('Pedido de socorro enviado')} style ={styles.enviar}>
                <Text style ={styles.enviarText}>Enviar</Text>
            </Pressable>
            <StatusBar style="auto"/>
        </View>
    )
}
