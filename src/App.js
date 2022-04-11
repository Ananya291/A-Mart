import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout'
import Main from './Main';
import Order from './Order';
import MainCheckout from './MainCheckout';
import LoginPage from './Loginpage'
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);
  return (
    user ?
      <Router>
        <Routes>
          <Route path="/" element={<MainCheckout />} /> //one way to write the code
          <Route path="/checkout" element={<Main component={<Checkout />} />} /> //another way
          <Route path="/order" element={<Order />} />
          <Route path="/Loginpage" element={<Main component={<LoginPage />} />} />
        </Routes>
      </Router> :
      <LoginPage />
  );
}

export default App;
