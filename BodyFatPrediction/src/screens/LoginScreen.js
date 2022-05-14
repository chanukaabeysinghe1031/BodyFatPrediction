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
                <Text style={styles.titleTextStyle}>Login</Text>
                <TextInput 
                    placeholder='Enter Email' 
                    style={styles.input}
                    placeholderTextColor='#9b59b6' 
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                />
                <TextInput 
                    placeholder='Enter Password' 
                    secureTextEntry 
                    style={styles.input} 
                    placeholderTextColor='#9b59b6' 
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                />
                
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('Home')}>
                   <Text>Login</Text>
                </TouchableOpacity>

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
         backgroundColor:"#bdc3c7"
    },
    wrapper:{
        width:'100%',
        // borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        paddingHorizontal:14,
        paddingTop:'10%',
        height:"80%",
        backgroundColor:"#ecf0f1",
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderBottomEndRadius:300,
        borderTopStartRadius:300,
        borderColor:'#9b59b6',
        borderWidth:1
    },
    titleTextStyle:{
        color:"#9b59b6",
        fontSize:30,
        letterSpacing:15,
        marginBottom:20,
        fontWeight:'900',
        fontFamily:"sans-serif-medium"
    },
    input:{
        color:'black',
        marginBottom:20,
        borderWidth:1,
        padding:10,
        width:'80%',
        borderRadius:30,
        color:'#9b59b6',
        borderColor:'#9b59b6',
    },
    buttonContainer:{
        marginTop:30,
        width:200,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#9b59b6',
        color:'#ecf0f1',
        borderRadius:20,
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