import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.centerContainer}>
        <Text style={styles.counterText}>{count}</Text>
      </View>

      <View style={styles.buttonContainer}>
        
        {/* Botón Reset: toque corto = reset, 5 seg = +1 */}
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.7}
          onPress={() => setCount(0)}
          onLongPress={() => setCount(prev => prev + 1)}
          delayLongPress={5000}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        {/* Botón +1: toque corto = +1, 5 seg = reset */}
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.7}
          onPress={() => setCount(prev => prev + 1)}
          onLongPress={() => setCount(0)}
          delayLongPress={5000}
        >
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>

      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  centerContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 120, 
    fontWeight: '300', 
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingBottom: 40, 
  },
  button: {
    backgroundColor: '#6A4C93', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12, 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});