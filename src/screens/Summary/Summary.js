import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  THANKYOU_PAGE,
  INVOLVED_PAGE,
  CONTACT_PAGE,
  INCIDENT_PAGE,
} from '../../constants/routeNames';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

// You can import from local files

const Summary = ({navigation}) => {
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
  const [showIncident, setShowIncident] = useState(true);
  const [showContact, setShowContact] = useState(true);
  const [showInvolved, setShowInvolved] = useState(true);
  const incident = useSelector(state => state.CarReducer.incident);
  const contactObj = useSelector(state => state.CarReducer.contactObj);
  const involvedObj = useSelector(state => state.CarReducer.involvedObj);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View style={{padding: 10}}>
          <Text style={{lineHeight: 22, fontSize: 16, marginBottom: 10}}>
            You have now entered all of your claim details. Please review the
            details and once you are happy you can submit your claim.
          </Text>
        </View>
        <View style={styles.summaryContent}>
          <View style={styles.incidentSection}>
            <Text style={{fontSize: 18}}>Incident details</Text>
            <TouchableOpacity onPress={() => setShowIncident(!showIncident)}>
              {showIncident ? (
                <AntDesign name="up" size={18} color="black" />
              ) : (
                <AntDesign name="down" size={18} color="black" />
              )}
            </TouchableOpacity>
          </View>
          {showIncident ? (
            <View style={{padding: 8}}>
              <View style={{marginBottom: 9}}>
                <Text style={{fontSize : 17}}>Date and Time</Text>
                {/* <Text style={styles.value}>11/08/2021 and 11:20</Text> */}
                <Text style={styles.value}>
                  {incident ? incident.date : 'DD'}/
                  {incident ? incident.month : 'MM'}/
                  {incident ? incident.year : 'YYYY'}{' '}
                  {incident ? incident.hour : 'H'}:
                  {incident ? incident.minute : 'M'}
                </Text>
              </View>
              <View style={{marginBottom: 9}}>
                <Text style={{fontSize : 17}}>Vehicle Registration</Text>
                <Text style={styles.value}>
                  {' '}
                  {incident ? incident.vehicleReg : '-'}
                </Text>
              </View>
              <View style={{marginBottom: 9}}>
                <Text style={{fontSize : 17}}>Circumstance</Text>
                <Text style={styles.value}>
                  {incident ? incident.situation : '-'}
                </Text>
              </View>
              <View style={styles.editSection}>
                <TouchableOpacity>
                  <Text
                    style={styles.edit}
                    onPress={() => navigation.navigate(INCIDENT_PAGE)}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          <View style={styles.line} />

          <View style={styles.incidentSection}>
            <Text style={{fontSize: 18}}>Contact details</Text>

            <TouchableOpacity onPress={() => setShowContact(!showContact)}>
              {showContact ? (
                <AntDesign name="up" size={18} color="black" />
              ) : (
                <AntDesign name="down" size={18} color="black" />
              )}
            </TouchableOpacity>
          </View>

          {showContact ? (
            <View style={{padding: 8}}>
              <View style={{marginBottom: 9}}>
                <Text style={{fontSize : 17}}>Home Telephone</Text>
                <Text style={styles.value}>
                  {contactObj ? contactObj.HousePhone : '-'}
                </Text>
              </View>
              <View style={{marginBottom: 9}}>
                <Text style={{fontSize : 17}}>Mobile Telephone</Text>
                <Text style={styles.value}>
                  {contactObj ? contactObj.MobilePhone : '-'}
                </Text>
              </View>
              <View style={{marginBottom: 9}}>
                <Text style={{fontSize : 17}}>Email</Text>
                <Text style={styles.value}>
                  {contactObj ? contactObj.Email : '-'}
                </Text>
              </View>
              <View style={styles.editSection}>
                <TouchableOpacity>
                  <Text
                    style={styles.edit}
                    onPress={() => navigation.navigate(CONTACT_PAGE)}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          <View style={styles.line} />
          <View style={styles.incidentSection}>
            <Text style={{fontSize: 18}}>Involved Parties details</Text>

            <TouchableOpacity onPress={() => setShowInvolved(!showInvolved)}>
              {showInvolved ? (
                <AntDesign name="up" size={18} color="black" />
              ) : (
                <AntDesign name="down" size={18} color="black" />
              )}
            </TouchableOpacity>
          </View>

          {showInvolved ? (
            <View style={{padding: 8}}>
              <Text style={[{fontSize : 17},{marginBottom:5},{fontWeight:"bold"}]}>Your vehicle</Text>
              <View style={styles.subSectionInvolved}>
                <Text style={{fontSize : 16}}>No of passengers</Text>
                {/* <Text style={styles.value}>{involved ? involved.noOfPassengers : "N/A"}</Text> */}
                <Text style={styles.value}>
                  {involvedObj ? involvedObj.noOfPassengers : '-'}
                </Text>
              </View>
              <Text style={[{fontSize : 17},{marginBottom:5},{fontWeight:"bold"}]}>Their vehicle</Text>
              <View style={styles.subSectionInvolved}>
                <Text style={{fontSize : 16}}>Registration</Text>
                <Text style={styles.value}>NA</Text>
              </View>
              <View style={styles.subSectionInvolved}>
                <Text style={{fontSize : 16}}>Driver name</Text>
                <Text style={styles.value}>daniel</Text>
              </View>
              <View style={styles.subSectionInvolved}>
                <Text style={{fontSize : 16}}>No of passengers</Text>
                {/* <Text style={styles.value}>{involved ? involved.noOfPassengers : "N/A"}</Text> */}
                <Text style={styles.value}>
                  {involvedObj ? involvedObj.noOfPassengers : '-'}
                </Text>
              </View>
              <View style={styles.editSection}>
                <TouchableOpacity>
                  <Text
                    style={styles.edit}
                    onPress={() => navigation.navigate(INVOLVED_PAGE)}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
        <View style={styles.submitSection}>
          <TouchableOpacity
            onPress={() => navigation.navigate(THANKYOU_PAGE)}
            style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  summaryContent: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  incidentSection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  value: {
    fontSize: 15,
  },
  editSection: {
    borderWidth: 1,
    borderColor: '#8e419c',
    marginLeft: 'auto',
    // borderRadius : 15,
    paddingTop: 5,
    paddingBottom: 5,
    width: 80,
  },
  edit: {
    color: '#8e419c',
    textAlign: 'center',
  },
  subSectionInvolved: {
    paddingLeft: 10,
    marginBottom: 9,
  },
  line: {
    height: 1,
    backgroundColor: 'rgb(192,192,192)',
    alignSelf: 'stretch',
    marginTop: 5,
    marginBottom: 7,
  },
  scrollview: {
    flexGrow: 1,
  },
  submitSection: {
    marginTop: 20,
  },
  submitButton: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#fff',
    backgroundColor: 'rgb(111, 163,19)',
    // borderRadius: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    minHeight: 50,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
});