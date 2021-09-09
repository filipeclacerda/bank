import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Bank from './components/Bank'

export default function App() {

	return (
		<SafeAreaView style={styles.container}>
			<Bank/>
			
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
