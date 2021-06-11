import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChatWidget } from '@infoset/react-native';

export default function App() {
  return (
    <>
      <View style={{ flex: 1, border: "1px solid red" }}>
        <ChatWidget
          isVisible={true}
          apiKey="mIpz5fM2zvlSQP0zRihu2UJdRjPB0cFGvRUdnW43"
          iosKey="4PNh0ijgG1HFaBb5Jtof4nAdPB5kcDS1"
          androidKey="7pTD3Cem3BKbQnxRpxFilQNqLfla4kf9"
        />
      </View>
      <Text>deneme</Text>
      <StatusBar style="auto" />
    </>
  );
}

