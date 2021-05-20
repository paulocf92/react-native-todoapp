import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode(): void;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: darkMode ? '#483C67' : '#273FAD' },
      ]}
    >
      <View style={styles.logo}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>
          do
        </Text>
      </View>
      <TouchableOpacity style={styles.darkModeButton} onPress={toggleDarkMode}>
        <Icon name={darkMode ? 'sun' : 'moon'} size={28} color='#fff' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  darkModeButton: {
    marginRight: -100,
  },
});
