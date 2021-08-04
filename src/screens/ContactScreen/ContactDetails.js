import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from 'react-native';
import {INCIDENT_PAGE, INVOLVED_PAGE} from '../../constants/routeNames';
import {useSelector, useDispatch} from 'react-redux';
import {GET_CONTACT} from '../../context/actions';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Contact=({navigation})=> {
  const dispatch = useDispatch();
  const [mobilePhone, setMobilePhone] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [email, setEmail] = useState('');
  const [ques1Selection, setQues1Selection] = useState('');
  const [userSelection, setUserSelection] = useState('');
  const [isValidHnum, setIsValidHnum] = useState(true);
  const [isValidMnum, setIsValidMnum] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

   // useEffect(() => {
    const contactObj = useSelector(state => state.CarReducer.contactObj);
    console.log(".....",contactObj);
    useEffect(() => {
    if(contactObj){
        setHomePhone(contactObj.HousePhone);
        setMobilePhone(contactObj.MobilePhone);
        setEmail(contactObj.Email);
    }
  },[]);

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

  const PROP1 = [
    {
      key: 'Yes',
      text: 'Yes',
    },
    {
      key: 'No',
      text: 'No',
    },
  ];

  const PROP2 = [
    {
      key: 'Mr. Daniel',
      text: 'Mr.Daniel',
    },
    {
      key: 'Other/Unknown',
      text: 'Other/Unknown',
    },
  ];

  const handleValidHnum = val => {
    if (val.trim().length == 10) {
      setHomePhone(val);
      setIsValidHnum(true);
    } else {
      setHomePhone(val);
      setIsValidHnum(false);
    }
  };

  const handleValidMnum = val => {
    if (val.trim().length == 10) {
      setMobilePhone(val);
      setIsValidMnum(true);
    } else {
      setMobilePhone(val);
      setIsValidMnum(false);
    }
  };
  const handleValidEmail = val => {
    if (val.includes('@') && val.includes('.com')) {
      setEmail(val);
      setIsValidEmail(true);
    } else {
      setEmail(val);
      setIsValidEmail(false);
    }
  };
  const onContinue = () => {
    if (
      ((isValidHnum == isValidMnum) == isValidEmail) == true &&
      mobilePhone != '' &&
      homePhone != '' &&
      email != ''
    ) {
      let contactObj = {
        HousePhone: homePhone,
        MobilePhone: mobilePhone,
        Email: email,
      };
      console.log(contactObj);
      console.log('continue button is pressed in contact page');
      dispatch({type:GET_CONTACT, payload:contactObj})
      // props.passData(contactObj); dispatch contactObj
      navigation.navigate(INVOLVED_PAGE);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView>
        <View style={styles.contactScreen}>
          <View style={styles.contactConatiner}>
            <Text style={styles.headingText}>
              Please enter at least one phone number and an email address
            </Text>
            <View style={styles.numbersContainer}>
              <Text style={styles.inputLable}>Home telephone number</Text>
              <TextInput
                style={styles.input}
                placeholder="home no"
                keyboardType="number-pad"
                onChangeText={e => handleValidHnum(e)}
                value={homePhone}
              />
              {isValidHnum ? null : (
                <Text style={styles.errorMsg}>
                  *Mobile number must contain 10 numbers
                </Text>
              )}

              <Text style={styles.inputLable}>Mobile telephone number</Text>
              <TextInput
                style={styles.input}
                placeholder="mobile no"
                keyboardType="number-pad"
                onChangeText={e => handleValidMnum(e)}
                value={mobilePhone}
              />
              {isValidMnum ? null : (
                <Text style={styles.errorMsg}>
                  *Mobile number must contain 10 numbers
                </Text>
              )}
              <View>
                {mobilePhone != '' && mobilePhone.length == 10 ? (
                  <View>
                    <Text style={styles.question}>
                      Do you need SMS notification to this number?
                    </Text>
                    <View style={styles.RadioBtnWrap}>
                      {PROP1.map(res => {
                        return (
                          <View key={res.key} style={styles.RadioBtnContainer}>
                            <TouchableOpacity
                              style={styles.radioCircle}
                              onPress={() => {
                                setQues1Selection(res.key);
                              }}>
                              {ques1Selection === res.key && (
                                <View style={styles.selectedRb} />
                              )}
                            </TouchableOpacity>
                            <Text style={styles.radioText}>{res.text}</Text>
                          </View>
                        );
                      })}
                      {/* <Text> Selected: {driverIssue} </Text> */}
                    </View>
                  </View>
                ) : null}
              </View>

              <Text style={styles.inputLable}>Email address*</Text>
              <TextInput
                style={styles.input}
                placeholder="email"
                onChangeText={e => handleValidEmail(e)}
                value={email}
              />
              {isValidEmail ? null : (
                <Text style={styles.errorMsg}>
                  *email must contain "@" and ".com"
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.headingText}>
                Who was the last drive of the vehicle?*
              </Text>
              <View style={styles.RadioBtnWrap}>
                {PROP2.map(res => {
                  return (
                    <View key={res.key} style={styles.RadioBtnContainer}>
                      <TouchableOpacity
                        style={styles.radioCircle}
                        onPress={() => {
                          setUserSelection(res.key);
                        }}>
                        {userSelection === res.key && (
                          <View style={styles.selectedRb} />
                        )}
                      </TouchableOpacity>
                      <Text style={styles.radioText}>{res.text}</Text>
                    </View>
                  );
                })}
                {/* <Text> Selected: {driverIssue} </Text> */}
              </View>
            </View>

            <View style={styles.submitButtonContainer}>
              
              <TouchableOpacity
                style={styles.continueButton}
                onPress={onContinue}
                // onPress={() => navigation.navigate("Involved Party Details")}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default Contact;

const styles = StyleSheet.create({
  contactScreen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contactContainer: {},
  headingText: {
    fontFamily: '',
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 12,
  },
  numbersContainer: {
    marginBottom: 12,
  },
  inputLable: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8e419c',
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  selectionButtonNotPressed: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,

    borderWidth: 1,
    borderColor: '#8e419c',
    marginBottom: 10,
  },
  buttonTextNotPressed: {
    color: '#8e419c',
    fontSize: 16,
    fontWeight:"bold"
  },
  selectionButtonPressed: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#8e419c',
    marginBottom: 10,
  },
  buttonTextPressed: {
    color: '#fff',
    fontSize: 16,
  },
  submitButtonContainer: {
    marginTop: 10
  },
  continueButton: {
    borderWidth: 1,
    width: "100%",
    borderColor: '#fff',
    backgroundColor: 'rgb(111, 163,19)',
    // borderRadius: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  continueButtonText: {
    color: '#fff',
    fontSize:16
  },
  questionContainer: {marginBottom: 10},
  question: {
    fontSize: 14,
    marginBottom: 10,
  },
  questionButton: {
    borderRadius: 26,
  },
  errorMsg: {
    color: 'red',
    fontSize: 12,
    marginTop: -10,
  },
  RadioBtnWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '70%',
    paddingVertical: 10,
  },
  RadioBtnContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    color: '#000',
    marginLeft: 5,
    marginRight: 15,
  },
  radioCircle: {
    height: 25,
    width: 25,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#8e419c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    zIndex: 2,
    borderRadius: 50,
    backgroundColor: '#8e419c',
    // borderColor:"#8e419c",
    // borderWidth:10,
  },
});
