import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AppContainer from './src/components/app-container'

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <Text>Hello, world!</Text>
        <StatusBar style="auto" />
      </View>
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
