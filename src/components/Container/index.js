/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import {Navigation} from 'react-native-navigation';
import type {Node} from 'react';

import type {ContainerProps} from './_types';
import Styles from './styles';

const Container = (props: ContainerProps): Node => {
  // Constants
  const {height} = Dimensions.get('window');
  const isAndroid = Platform.OS === 'android';

  // Local variables
  const [screenHeight, setScreenHeight] = useState(height);
  const [scroll, setScroll] = useState(false);
  const [top, setTop] = useState(0);

  // Dynamic styles
  const Color = props.color ? {backgroundColor: props.color} : null;
  const Top = props.bar && top ? {paddingTop: top} : null;
  const Padding =
    typeof props.padding === 'number'
      ? {
          paddingLeft: props.padding,
          paddingRight: props.padding,
          paddingTop: props.padding,
        }
      : Styles.Padding;

  // Called when content of view is changed
  function OnSizeChange(contentWidth, contentHeight): void {
    setScreenHeight(contentHeight);
  }

  // Watch screenHeight variable
  useEffect((): void => {
    setScroll(screenHeight > height);
  }, [screenHeight]);

  // Get top bar height
  useEffect((): void => {
    Navigation.constants().then((constants) => {
      const {topBarHeight} = constants;
      isAndroid ? setTop(topBarHeight) : null;
    });
  }, []);

  return (
    <SafeAreaView style={[Styles.Container, Color]}>
      <ScrollView
        style={Styles.Flex}
        contentContainerStyle={[Styles.ScrollView, Color]}
        scrollEnabled={scroll}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={OnSizeChange}>
        <KeyboardAvoidingView
          style={Styles.Flex}
          behavior="padding"
          enabled={!isAndroid}>
          <View style={[Styles.Content, Padding, Top]}>{props.children}</View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Container;
