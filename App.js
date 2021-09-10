import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Bank from './components/Bank'
import { colors } from './utils/colors';

export default function App() {

	return (
		<SafeAreaView style={styles.container}>
			<Bank/>			
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: colors.basic.purple,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
