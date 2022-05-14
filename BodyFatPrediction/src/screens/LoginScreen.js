import React , {useState} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const LoginScreen = ({navigation}) => {

    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput 
                    placeholder='Enter Email' 
                    style={styles.input}
                    placeholderTextColor='black' 
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                />
                <TextInput 
                    placeholder='Enter Password' 
                    secureTextEntry 
                    style={styles.input} 
                    placeholderTextColor='black' 
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                />
                
                <View><Button title="Login" style={styles.button} onPress={()=>navigation.navigate('Home')}/></View>

                <View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>
                    <Text style={styles.text}>Don't have an account? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
         flex:1,
         alignItems:'center',
         justifyContent:'center',
    },
    wrapper:{
        width:'80%',
        // borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        paddingHorizontal:14,
        paddingTop:'10%'
    },
    input:{
        color:'black',
        marginBottom:20,
        borderWidth:1,
        padding:10,
        borderColor:'#bbb',
    },
    button:{
        marginTop:50,
        width:300,
        alignItems:'center',
        justifyContent:'center',
    },
    link:{
        color:'blue'
    },
    text:{
        color:'black',
        textAlign:'center'
    }
})
export default LoginScreen;