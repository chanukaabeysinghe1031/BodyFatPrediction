import React , {useState} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';

const PredictFatLevelScreen = ({navigation}) => {
    const [age,setAge] = useState(null);
    const [weight,setWeight] = useState(null);
    const [height,setHeight] = useState(null);
    const [neck,setNeck] = useState(null);
    const [chest,setChest] = useState(null);
    const [abdomen,setAbdomen] = useState(null);
    const [hip,setHip] = useState(null);
    const [thigh,setThigh] = useState(null);
    const [knee,setKnee] = useState(null);
    const [ankle,setAnkle] = useState(null);
    const [biceps,setBiceps] = useState(null);
    const [forearm,setForearm] = useState(null);
    const [wrist,setWrist] = useState(null);
    return(
        <View style={styles.container}>
            <View>
             <Text style={styles.title}>Predict Your Fat Level</Text>
            </View>
            <ScrollView style={styles.wrapper}>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Age' 
                        style={styles.input}
                        placeholderTextColor='black' 
                        value={age}
                        onChangeText={(text)=>setAge(text)}
                    />
                    <TextInput 
                        placeholder='Weight' 
                        style={styles.input}
                        placeholderTextColor='black' 
                        value={weight}
                        onChangeText={(text)=>setWeight(text)}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Height' 
                        style={styles.input}
                        placeholderTextColor='black' 
                        value={height}
                        onChangeText={(text)=>setHeight(text)}
                    />
                    <TextInput 
                        placeholder='Neck Size' 
                        style={styles.input} 
                        placeholderTextColor='black' 
                        value={neck}
                        onChangeText={(text)=>setNeck(text)}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Chest Size' 
                        style={styles.input}
                        placeholderTextColor='black' 
                        value={chest}
                        onChangeText={(text)=>setChest(text)}
                    />
                    <TextInput 
                        placeholder='Abdomen Size' 
                        style={styles.input}
                        placeholderTextColor='black' 
                        value={abdomen}
                        onChangeText={(text)=>setAbdomen(text)}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Hip Size' 
                        style={styles.input}
                        placeholderTextColor='black' 
                        value={hip}
                        onChangeText={(text)=>setHip(text)}
                    />
                    <TextInput 
                        placeholder='Thigh Size' 
                        style={styles.input}
                        placeholderTextColor='black' 
                        value={thigh}
                        onChangeText={(text)=>setThigh(text)}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Knee Size' 
                        style={styles.input}
                        placeholderTextColor='black' 
                        value={knee}
                        onChangeText={(text)=>setKnee(text)}
                    />
                    <TextInput 
                        placeholder='Ankle Size' 
                        style={styles.input}
                        placeholderTextColor='black' 
                        value={ankle}
                        onChangeText={(text)=>setAnkle(text)}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Biceps Size' 
                        style={styles.input}
                        placeholderTextColor='black' 
                        value={biceps}
                        onChangeText={(text)=>setBiceps(text)}
                    />
                    <TextInput 
                        placeholder='Forearm Size' 
                        style={styles.input}
                        placeholderTextColor='black' 
                        value={forearm}
                        onChangeText={(text)=>setForearm(text)}
                    />
                </View>
        
                <TextInput 
                    placeholder='Wrist Size' 
                    style={styles.oneInput}
                    placeholderTextColor='black' 
                    value={wrist}
                    onChangeText={(text)=>setWrist(text)}
                />

                <View style={styles.button}><Button title="Predict Fat Level"/></View>
                <View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                        <Text style={styles.link}>Home</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        width:'100%',
        // borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        paddingHorizontal:14,
        paddingTop:'10%'
    },
    title:{
        color:'blue',
        fontSize:25,
        marginTop:10
    },
    input:{
        color:'black',
        marginBottom:20,
        borderWidth:1,
        padding:10,
        borderColor:'#bbb',
        width:'40%',
        marginHorizontal:'5%',
        borderRadius:10,
        textAlign:'center'
    },
    oneInput:{
        color:'black',
        marginBottom:20,
        borderWidth:1,
        padding:10,
        borderColor:'#bbb',
        width:'90%',
        marginHorizontal:'5%',
        borderRadius:10,
        textAlign:'center'
    },
    button:{
        marginTop:50,
        width:'100%',
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
    },
    link:{
        color:'blue',
        marginBottom:100
    },
    text:{
        color:'black',
        textAlign:'center'
    },
    row:{
        flexDirection:'row',
    }
})

export default PredictFatLevelScreen;