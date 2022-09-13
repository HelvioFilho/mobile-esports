import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Background } from './src/components/Background';
import { theme } from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Background />
    </ThemeProvider>
  );
}
