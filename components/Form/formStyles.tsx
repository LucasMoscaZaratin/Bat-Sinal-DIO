import { StyleSheet } from 'react-native';

 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    textArea:{
        marginBottom: 5,
        width: '80%',
        height:20,
        textAlignVertical: 'top',
        backgroundColor: '#f3f3f3',
    },
    textLocation:{
        backgroundColor: '#f3f3f3',
        width: '80%',
        height:100,
        textAlignVertical: 'top'
    },
    textProblem:{
        backgroundColor: '#f3f3f3',
        width: '80%',
        height:100,
        textAlignVertical: 'top'
    },
    text:{
        marginTop: 8,
        marginLeft: 35,
        alignSelf:'flex-start'
    },
    enviar:{
        backgroundColor: '#000',
        height: 60,
        width: '80%',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
    },
    enviarText:{
        fontSize: 20,
        textAlign: 'center',
        color: '#fff'
    },
  });