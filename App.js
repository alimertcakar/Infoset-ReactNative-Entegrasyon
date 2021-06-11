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
          iosKey="VdWWpj2JbLjfScwOQM0uBmOtU85eOXrv"
          androidKey="HolFCnNcHivTahSyUluFW2UBqArrCyry"
        />
      </View>
    </>
  );
}

