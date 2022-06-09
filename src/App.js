import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Instrumentos } from "./components/Instrumentos";
import { Detalle } from "./components/Detalle";
import { Home } from "./components/Home";
import { DondeEstamos } from "./components/DondeEstamos";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dondeEstamos" element={<DondeEstamos />} />
        <Route path="/listaProductos" element={<Instrumentos />} />
        <Route path="/producto/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
