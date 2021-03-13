import React, { useRef, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Animated,
    Easing,
} from "react-native";

export default function Panel(props) {
    const { title } = props;
    const [isExpand, setIsExpand] = useState(false);
    const [titleHeight, setTitleHeight] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const animation = useRef(new Animated.Value(0)).current;

    const calculateTitleHeight = (event) =>
        setTitleHeight(event.nativeEvent.layout.height);

    const calculateContentHeight = (event) =>
        setContentHeight(event.nativeEvent.layout.height);

    const toggle = () => {
        let initVal = isExpand ? titleHeight + contentHeight : titleHeight;
        let finalVal = isExpand ? titleHeight : titleHeight + contentHeight;

        setIsExpand(!isExpand);
        animation.setValue(initVal);
        Animated.timing(animation, {
            toValue: finalVal,
            duration: 1000
        }).start();
    };

    return (
        <Animated.View
            style={{
                margin: 10,
                height: animation,
                // overflow: 'hidden'
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
                onLayout={calculateTitleHeight}
            >
                <Text>{title}</Text>
                <TouchableOpacity onPress={toggle}>
                    <Text>Click</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    paddingBottom: 10
                }}
                onLayout={calculateContentHeight}
            >
                {props.children}
            </View>
        </Animated.View>
    );
}
