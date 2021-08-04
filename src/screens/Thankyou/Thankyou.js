import React,{useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {HOME_PAGE} from '../../constants/routeNames';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

 const Thankyou=({navigation})=> {
  const {setOptions, toggleDrawer} = useNavigation();
  useEffect(() => {
      setOptions({
          headerRight: () => (
              <TouchableOpacity
                  // onPress={()=>{toggleDrawer()}}
              >
                  <MaterialIcon style={{padding:10}} color="#fff" name="menu" size={25}></MaterialIcon>
              </TouchableOpacity>
          ),
      });
  }, [])
  const route = useRoute();
  const nav = useNavigation();
  useEffect(() => {
         nav.setOptions({
              headerLeft: null,
              headerTitleAlign:"center"
          })
  }, [nav]);
  return (
    <View style={styles.container}>
     
      
      <View style={styles.content}>
        <Text style={styles.para1}>Thank you for submitting your claim,one of our claim handlers will be in touch by the end of the next working day.</Text>
        <Text style={styles.para2}>The claim number for your policy is : <Text style={styles.policyNum}>4062863N</Text></Text>
        <Text style={styles.para3}>if you need to contact us please call : <Text style={styles.contact}>03451 122 3018</Text> </Text>
      </View>
      <View style={styles.btnCont}>
      <TouchableOpacity onPress={()=>navigation.navigate(HOME_PAGE)} style={styles.homeBtn}><Text style={styles.homeBtnText}>Home</Text></TouchableOpacity>
      </View>
     
    </View>
  );
}
export default Thankyou;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight : 5,
  },
 
  content : {
    padding : 10
  },
  para1 : {
    fontSize : 16,
    lineHeight : 25
  },
  para2 : {
    paddingTop : 14,
    fontSize : 15
  },
  policyNum : {
    fontWeight : "bold"
  },
  para3 : {
    paddingTop : 13,
    fontSize : 13
  },
  contact : {
    color : "blue",
    textDecorationLine : "underline"
    
  },
  btnCont:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10
  },
  homeBtn:{
    borderWidth: 1,
    width: "33%",
    backgroundColor: '#fff',
    borderColor: '#8e419c',
    // borderRadius: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    fontSize:16,
    marginHorizontal:"auto",


  },
  homeBtnText:{
    color:"#8e419c",
    fontSize:16

  }

  
});
