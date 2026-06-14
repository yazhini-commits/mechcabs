import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:service" element={<Booking />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
