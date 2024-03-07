import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Lista } from './Lista';
import { Inicio } from './Inicio';
import { ObjetoFondoCard } from './ObjetoFondo'
import './styles.css';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/objetoFondo" element={<ObjetoFondoCard />} />
      </Routes>
    </div>
  );
}