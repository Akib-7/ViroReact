import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import DocumentPicker from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const SelectModel = () => {
  const navigation = useNavigation();
  const [selectedDoc, setSelectedDoc] = useState();
  useEffect(() => {
    // console.log('IN USE EFFECT DOC :' + selectedDoc);
  }, [selectedDoc]);

  var pickDocument = async () => {
    try {
      //pick method opens filemanager of device
      var doc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: false,
      });
      setSelectedDoc(doc);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled Upload', error);
      } else {
        console.log(error);
      }
    }
  };
  var handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', {
      uri: selectedDoc.uri,
      name: selectedDoc.name,
      type: selectedDoc.type,
    });
    console.log('In HandleUpload DOC' + JSON.stringify(selectedDoc));
    await axios
      .post('http://192.168.10.8:3000/uploadModel', formData)
      .then(res => {
        console.log('Doc sent to Backend Successfully');
        alert('Model Uploaded Successfully!');
      })
      .catch(error => {
        console.error('Error:', error.message);
        if (error.response) {
          console.error('Status:', error.response.status);
          console.error('Data:', error.response.data);
        } else if (error.request) {
          console.error('No response received');
        } else {
          console.error('Error:', error.message);
        }
      });

    // .catch(error => console.log('INSIDE AXIOS ' + error));
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 50,
          fontSize: 30,
          fontWeight: '600',
          color: 'black',
        }}>
        3D Model
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          padding: 10,
          borderRadius: 5,
          width: '50%',
          marginTop: 160,
          alignSelf: 'center',
        }}
        onPress={pickDocument}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 20,
          }}>
          Pick file
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          padding: 10,
          borderRadius: 5,
          width: '50%',
          marginTop: 20,
          alignSelf: 'center',
        }}
        onPress={handleUpload}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 20,
          }}>
          Upload
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          padding: 10,
          borderRadius: 5,
          width: '50%',
          marginTop: 20,
          alignSelf: 'center',
        }}
        onPress={() => {
          navigation.navigate('AR View');
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 20,
          }}>
          AR Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectModel;
