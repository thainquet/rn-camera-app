import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PushNotification from 'react-native-push-notification';

const CameraScreen = () => {
  useEffect(() => {
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      title: 'asdasdas',
      channelId: 'channel-id',
      message: 'My Notification Message', // (required)
      date: new Date(Date.now() + 10 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      repeatType: 'time',
      repeatTime: 5000,
      id: 'loopNoti',
    });
  }, []);

  return (
    <View>
      <Text>Homepage</Text>
      <TouchableOpacity
        onPress={() =>
          // PushNotification.cancelLocalNotifications({id: 'loopNoti'})
          PushNotification.deleteChannel("channel-id")
        }>
        <Text>stop</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
