import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ChatWidget,
} from "@infoset/react-native";

const visitor = {
  id: 123,
  firstName: "John",
  lastName: "Wick",
  company: "infoset",
  email: "examplee@infoset.app",
  phone: "+90123456790",
  photoUrl: "",
  createdAt: "",
  userHash: "",
};

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Text>selam</Text>

      <ChatWidget
        isVisible={true}
        apiKey="mIpz5fM2zvlSQP0zRihu2UJdRjPB0cFGvRUdnW43"
        iosKey="VdWWpj2JbLjfScwOQM0uBmOtU85eOXrv"
        androidKey="HolFCnNcHivTahSyUluFW2UBqArrCyry"
        color="#E69618"
        onWidgetHide={() => console.log("false")}
        onWidgetWillHide={() => console.log("will hide")}
        onWidgetWillShow={() => null}
        onWidgetShow={() => null}
        onNewMessage={() => console.log("on new message")}
        handleUrl={(url) => console.log(url)}
        visitor={visitor}
        tags={["Destek"]}
      />
    </View>
  );
}