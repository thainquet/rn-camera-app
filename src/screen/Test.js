import React, { useEffect, useState } from "react";

import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import firestore from "@react-native-firebase/firestore";

const Test = (props) => {
    const [todoList, setTodoList] = useState();
    useEffect(() => {
        async function init() {
            const events = firestore().collection("todos");
            events.get().then((querySnapshot) => {
                const tempDoc = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                console.log(tempDoc);
                setTodoList(tempDoc);
            });
        }
        init();
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {todoList &&
                todoList.map((todo) => {
                    return (
                        <TouchableOpacity key={todo.id}>
                            <Text>{todo.name}</Text>
                        </TouchableOpacity>
                    );
                })}
        </View>
    );
};

export default Test;
