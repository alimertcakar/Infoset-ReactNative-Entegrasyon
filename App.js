import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChatWidget } from '@infoset/react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatWidget
        isVisible={true}
      // apiKey="2bdccbb3-dbbc-416e-ad21-787a5e578507"
      // iosKey="2bdccbb3-dbbc-416e-ad21-787a5e578507"
      // androidKey="2bdccbb3-dbbc-416e-ad21-787a5e578507"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
