import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

const generate = (props) => (
  <TouchableWithoutFeedback
    // onPress={()=>alert('Touched')}
    // onLongPress={()=>alert('Long pressed...')}
    // onPressIn={()=>alert('pressed')}
    // onPressOut={()=>alert('released')}
    // delayLongPress={2000}
    onPress={ () => {
        props.add();
      }
    }
    >
    <View style={styles.generate}>
      <Text>Add number</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  generate: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#00bcd4',
    width: '100%',
    marginTop: 20
  }
});

export default generate;