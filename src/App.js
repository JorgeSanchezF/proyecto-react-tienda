import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lista from './Lista';
import Inicio from './Inicio';
import './styles.css';
export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </Router>
    </div>
  );
}