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
          apiKey="QJd96e0cYwppDjNLRlrCaxQKh0rRB1gK7XVg8xgQ"
          iosKey="4PNh0ijgG1HFaBb5Jtof4nAdPB5kcDS1"
          androidKey="7pTD3Cem3BKbQnxRpxFilQNqLfla4kf9"
        />
      </View>
      <Text>deneme</Text>
      <StatusBar style="auto" />
    </>
  );
}

