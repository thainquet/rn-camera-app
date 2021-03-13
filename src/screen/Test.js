import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Animated, TouchableOpacity, Button, SafeAreaView } from 'react-native';
const { height, width } = Dimensions.get('window');


const ListItem = (props) => {
  const [checkInModal, setCheckInModal] = useState(false);
  const [animatedHeight, setAnimatedHeight] = useState(new Animated.Value(0))
  const [dynamicHeight, setDynamicHeight] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [someVariable, setSomeVariable] = useState(true)

  const toggleDropdown = () => {
    if (expanded == true) {
      // collapse dropdown
      setDynamicHeight(0);
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 200,
      }).start()
    } else {
      // expand dropdown
      Animated.timing(animatedHeight, {
        toValue: 100,
        duration: 200,
      }).start()
    }
    setExpanded(!expanded)
  }

  useEffect(() => {
    if (expanded) {
      Animated.timing(animatedHeight, {
        toValue: 0 + (dynamicHeight),
        duration: 1000,
      }).start();
    }
  }, [dynamicHeight]);

  const setHeight = (height) => {
    setDynamicHeight(prev => prev + height);
  }


  const renderAdditionalContent = () => {
    if (someVariable == true) {
      return (
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </Text>
      )
    }
  }

  const interpolatedHeight = animatedHeight.interpolate({
    inputRange: [0, 100],
    outputRange: [75, 225]
  })

  return (
    <SafeAreaView>
      <Animated.View
        style={[styles.container, { height: interpolatedHeight }]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={styles.leftContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.title}>Title</Text>
            </View>
          </View>

          <View style={styles.rightContainer}>
            <TouchableOpacity onPress={() => toggleDropdown()} style={styles.toggleBtn}>
              <Text>Expand/Collapse</Text>
            </TouchableOpacity>
          </View>
        </View>
        {expanded == true ? (
          <View onLayout={(event) => {
            var { x, y, width, height } = event.nativeEvent.layout;
            setHeight(height);
          }}>
            <Text>Subject</Text>

            <Text>Subject Content</Text>
            {renderAdditionalContent()}

          </View>
        ) : null}
      </Animated.View>
      </SafeAreaView>
    // This commented section is where dynamic content will be rendered, this is the reason i need post-animation-dynamic-height for the Animated.View container is necessary

    //</Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderRadius: 25,
    width: width * 0.95,
    marginBottom: 5,
    marginHorizontal: 5,
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  leftContainer: {
    justifyContent: 'space-between',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#454A66'
  },
  toggleBtn: {
    borderWidth: 1,
    borderRadius: 7,
    paddingTop: 4,
    paddingBottom: 2.5,
    paddingHorizontal: 4,
    marginLeft: 10
  },
  bottomContainer: {
    marginVertical: 20
  }
});

export default ListItem;
