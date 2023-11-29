import {StyleSheet, Text, View} from 'react-native';
import type {PropsWithChildren} from 'react';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

// in the props we are defining the type of prop name
export default function Icons({name}: IconsProps) {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" color="#EA7773" size={38} />;
    case 'cross':
      return <Icon name="times" color="#EA7773" size={38} />;
    default:
      return <Icon name="pencil" color="#EA7773" size={38} />;
  }
}

const styles = StyleSheet.create({});
