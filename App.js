import {Button, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';

export default function File() {
  const [file, setFile] = useState();
  const doce = async () => {
    // DocumentPicker.pickSingle(options)
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    console.log(res, '8');
    setFile(res);
  };

  console.log(file, '12');
  return (
    <View>
      <Button title="Take Document" onPress={() => doce()} />
      {file && (
        <Image
          source={{uri: file[0].uri}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
