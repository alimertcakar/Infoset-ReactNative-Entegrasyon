import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  ChatWidget,
  VisitorType,
  // ChatWidgetProps,
} from '@infoset/react-native';

const visitor: VisitorType = {
  id: 123,
  firstName: 'John',
  lastName: 'Wick',
  company: 'infoset',
  email: 'example@infoset.app',
  phone: '+901234567890',
  photoUrl: '',
  createdAt: '',
  userHash: '',
};

export default function App() {
  return (
    <>
      <View style={{ flex: 1, border: "1px solid red" }}>
        <Text>infoset chat widget</Text>
        <ChatWidget
          isVisible={true}
          apiKey="mIpz5fM2zvlSQP0zRihu2UJdRjPB0cFGvRUdnW43"
          iosKey="VdWWpj2JbLjfScwOQM0uBmOtU85eOXrv"
          androidKey="HolFCnNcHivTahSyUluFW2UBqArrCyry"
          color="#E69618"
          onWidgetHide={() => setVisible(false)}
          onWidgetWillHide={() => console.log('will hide')}
          onWidgetWillShow={() => console.log('will show')}
          onWidgetShow={() => console.log('on show')}
          onNewMessage={() => console.log('on new message')}
          handleUrl={(url) => console.log(url)}
          visitor={visitor}
          tags={['Support', 'Recurring Customer']}
        />
      </View>
    </>
  );
}

