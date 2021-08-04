import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {INVOLVED_PAGE} from '../../constants/routeNames';
import {useDispatch, useSelector} from 'react-redux';
import {GET_PASSENGERS} from '../../context/actions';

import {Picker} from '@react-native-community/picker';
const AddPassenger = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('Mr');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [hno, setHno] = useState('');
  const [addL1, setAddL1] = useState('');
  const [addL2, setAddL2] = useState('');
  const [addL3, setAddL3] = useState('');
  const [addL4, setAddL4] = useState('');
  const [postcode, setPostcode] = useState('');
  const [hpNo, setHpNo] = useState('');
  const [moNo, setMoNo] = useState('');
  const [email, setEmail] = useState('');

  const {setOptions, toggleDrawer} = useNavigation();
  useEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity
        // onPress={()=>{toggleDrawer()}}
        >
          <MaterialIcon
            style={{padding: 10}}
            color="#fff"
            name="menu"
            size={25}></MaterialIcon>
        </TouchableOpacity>
      ),
    });
  }, []);

  // useEffect(() => {
  const addPassObj = useSelector(state => state.CarReducer.addPassObj);
  console.log('.....', addPassObj);
  useEffect(() => {
    if (addPassObj) {
      setTitle(addPassObj.title);
      setFirstName(addPassObj.firstName);
      setLastName(addPassObj.lastName);
      setHno(addPassObj.HouseNo);
      setAddL1(addPassObj.addressLane1);
      setAddL2(addPassObj.addressLane2);
      setAddL3(addPassObj.addressLane3);
      setAddL4(addPassObj.addressLane4);
      setPostcode(addPassObj.postcode);
      setHpNo(addPassObj.HousePhone);
      setMoNo(addPassObj.MobilePhone);
      setEmail(addPassObj.Email);
    }
  }, []);

  const onSubmit = () => {
    //if(title && firstName && lastName && hno && addL1 && addL2 && addL3 && addL4 && postcode && hpNo && moNo && email != ""){
    let addPassObj = {
      elementNo: '',
      title: title,
      firstName: firstName,
      lastName: lastName,
      HouseNo: hno,
      addressLane1: addL1,
      addressLane2: addL2,
      addressLane3: addL3,
      addressLane4: addL4,
      postcode: postcode,
      HousePhone: hpNo,
      MobilePhone: moNo,
      Email: email,
    };
    console.log(addPassObj);
    console.log('save button is pressed in add passenger page');
    dispatch({type: GET_PASSENGERS, payload: addPassObj});
    // props.passData(addPassObj); //Dispatch addPassObj
    navigation.navigate(INVOLVED_PAGE);
    // }
  };
  const onCancel = () => {
    console.log('cancel button pressed in Add Passenger Page');
    navigation.navigate(INVOLVED_PAGE);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView>
        <View style={styles.addPassengerScreen}>
          <View style={styles.addPassengerConatiner}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>Title</Text>
              <View
                style={{borderBottomWidth: 1, width: '30%', marginBottom: 20}}>
                <Picker
                  style={styles.selectorBox}
                  selectedValue={title}
                  onValueChange={e => setTitle(e)}>
                  <Picker.Item label="Mr" value="Mr" />
                  <Picker.Item label="Mrs" value="Mrs" />
                </Picker>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="first name"
                onChangeText={e => setFirstName(e)}
                value={firstName}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>LastName</Text>
              <TextInput
                style={styles.input}
                placeholder="last name"
                onChangeText={e => setLastName(e)}
                value={lastName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>House number or name</Text>
              <TextInput
                style={styles.input}
                placeholder="home no"
                onChangeText={e => setHno(e)}
                value={hno}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>Address line 1</Text>
              <TextInput
                style={styles.input}
                placeholder="address line 1"
                onChangeText={e => setAddL1(e)}
                value={addL1}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>Address line 2</Text>
              <TextInput
                style={styles.input}
                placeholder="address line 2"
                onChangeText={e => setAddL2(e)}
                value={addL2}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>Address line 3</Text>
              <TextInput
                style={styles.input}
                placeholder="address line 3"
                onChangeText={e => setAddL3(e)}
                value={addL3}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>Address line 4</Text>
              <TextInput
                style={styles.input}
                placeholder="address line 4"
                onChangeText={e => setAddL4(e)}
                value={addL4}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>Postcode</Text>
              <TextInput
                style={styles.input}
                placeholder="postcode"
                keyboardType="number-pad"
                onChangeText={e => setPostcode(e)}
                value={postcode}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>Home telephone number</Text>
              <TextInput
                style={styles.input}
                placeholder="home phone no"
                keyboardType="number-pad"
                onChangeText={e => setHpNo(e)}
                value={hpNo}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>Mobile telephone number</Text>
              <TextInput
                style={styles.input}
                placeholder="mobile phone no"
                keyboardType="number-pad"
                onChangeText={e => setMoNo(e)}
                value={moNo}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabelText}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="email address"
                onChangeText={e => setEmail(e)}
                value={email}
              />
            </View>
            <View style={styles.bottomButtons}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => onSubmit()}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default AddPassenger;

const styles = StyleSheet.create({
  addPassengerScreen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  addPassengerContainer: {},
  input: {
    borderBottomWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  inputContainer: {
    // marginBottom: 12,
  },
  selectorBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 10,
    //marginBottom: 10,
  },
  saveButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    //borderRadius: 26,
    width: '100%',
    backgroundColor: 'rgb(111, 163,19)',
    minHeight: 50,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  inputLabelText: {
    fontWeight: 'bold',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
