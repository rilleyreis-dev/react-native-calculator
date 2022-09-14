import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, Platform } from 'react-native';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyboard';
import { ThemeContext } from './src/context/ThemeContex';
import { myColors } from './src/styles/colors';
import { Feather } from '@expo/vector-icons';

export default function App() {

  const [theme, setTheme] = useState('light');


  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container , {backgroundColor:myColors.bgDark}]}>
        <TouchableOpacity style={styles.switchTheme}
            onPress={ () => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <Feather name={theme === "light" ? "moon" : "sun"} size={25} color={theme === "light" ? "black" : "white"} />
        </TouchableOpacity>
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.bgLight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
  switchTheme: {
    alignSelf: 'flex-end',
    marginRight: 20
  }
});
