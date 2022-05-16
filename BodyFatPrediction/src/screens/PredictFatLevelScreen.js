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
            <View style={styles.titleContainer}>
             <Text style={styles.title}>Predict Your Fat Level</Text>
            </View>
            <ScrollView style={styles.wrapper}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detials}>Input Following Details</Text>
                </View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Age' 
                        style={styles.input}
                        placeholderTextColor='#9b59b6' 
                        value={age}
                        keyboardType='numeric'
                        onChangeText={(text)=>setAge(text)}
                    />
                    <TextInput 
                        placeholder='Weight' 
                        style={styles.input}
                        placeholderTextColor='#9b59b6' 
                        value={weight}
                        keyboardType='numeric'
                        onChangeText={(text)=>setWeight(text)}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Height' 
                        style={styles.input}
                        placeholderTextColor='#9b59b6' 
                        value={height}
                        keyboardType='numeric'
                        onChangeText={(text)=>setHeight(text)}
                    />
                    <TextInput 
                        placeholder='Neck Size' 
                        style={styles.input} 
                        placeholderTextColor='#9b59b6' 
                        value={neck}
                        keyboardType='numeric'
                        onChangeText={(text)=>setNeck(text)}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Chest Size' 
                        style={styles.input}
                        placeholderTextColor='#9b59b6' 
                        value={chest}
                        keyboardType='numeric'
                        onChangeText={(text)=>setChest(text)}
                    />
                    <TextInput 
                        placeholder='Abdomen Size' 
                        style={styles.input}
                        placeholderTextColor='#9b59b6' 
                        value={abdomen}
                        keyboardType='numeric'
                        onChangeText={(text)=>setAbdomen(text)}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Hip Size' 
                        style={styles.input}
                        placeholderTextColor='#9b59b6' 
                        value={hip}
                        keyboardType='numeric'
                        onChangeText={(text)=>setHip(text)}
                    />
                    <TextInput 
                        placeholder='Thigh Size' 
                        style={styles.input}
                        placeholderTextColor='#9b59b6' 
                        value={thigh}
                        keyboardType='numeric'
                        onChangeText={(text)=>setThigh(text)}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Knee Size' 
                        style={styles.input}
                        placeholderTextColor='#9b59b6' 
                        value={knee}
                        keyboardType='numeric'
                        onChangeText={(text)=>setKnee(text)}
                    />
                    <TextInput 
                        placeholder='Ankle Size' 
                        style={styles.input}
                        placeholderTextColor='#9b59b6' 
                        value={ankle}
                        keyboardType='numeric'
                        onChangeText={(text)=>setAnkle(text)}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder='Biceps Size' 
                        style={styles.input}
                        placeholderTextColor='#9b59b6' 
                        value={biceps}
                        keyboardType='numeric'
                        onChangeText={(text)=>setBiceps(text)}
                    />
                    <TextInput 
                        placeholder='Forearm Size' 
                        style={styles.input}
                        placeholderTextColor='#9b59b6' 
                        value={forearm}
                        keyboardType='numeric'
                        onChangeText={(text)=>setForearm(text)}
                    />
                </View>
        
                <TextInput 
                    placeholder='Wrist Size' 
                    style={styles.oneInput}
                    placeholderTextColor='#9b59b6' 
                    value={wrist}
                    keyboardType='numeric'
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
        // paddingHorizontal:14,
        paddingTop:10,
    },
    titleContainer:{
        width:'100%',
        height:100,
        backgroundColor:'#9b59b6',
    },
    title:{
        color:'blue',
        fontSize:25,
        marginTop:30,
        textAlign:'center',
        color:'#ecf0f1',
        fontWeight:'bold'
    },

    detials:{
        textAlign:'center',
        color:'#9b59b6',
        borderBottomColor:'#ecf0f1',
        marginBottom:10
    },
    input:{
        color:'black',
        marginBottom:20,
        borderWidth:1,
        padding:5,
        borderColor:'#9b59b6',
        width:'40%',
        marginHorizontal:'5%',
        borderRadius:10,
        textAlign:'center'
    },
    oneInput:{
        color:'black',
        marginBottom:20,
        borderWidth:1,
        padding:5,
        borderColor:'#9b59b6',
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