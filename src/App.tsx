import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/geral/Login";
import Cadastro from "./pages/geral/Cadastro";
import ListaEstabelecimentos from "./pages/cliente/ListaEstabelecimentos";
import AgendaProfissional from "./pages/profissional/AgendaProfissional";
import HorariosProfissional from "./pages/profissional/HorariosProfissional";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route
                    path="/listaEstabelecimentos"
                    element={<ListaEstabelecimentos />}
                />
                <Route
                    path="/agendaProfissional"
                    element={<AgendaProfissional />}
                />
                <Route
                    path="/horarios-profissional"
                    element={<HorariosProfissional />}
                />
            </Routes>
        </Router>
    );
}

export default App;
