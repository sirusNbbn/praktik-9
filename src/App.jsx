// File: src/App.jsx
import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Home />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;