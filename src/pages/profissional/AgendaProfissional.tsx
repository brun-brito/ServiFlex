import { Link } from "react-router-dom";

// @JhonPi implementar agenda do profissional
export default function AgendaProfissional() {
    return (
        <div className="container d-flex vh-100 align-items-center justify-content-center">
            <div className="card text-center p-5">
                <h2 className="mb-3 text-success">
                    Login realizado com sucesso para o profissional!
                </h2>
                <p>
                    Você foi autenticado com sucesso.
                    id: {localStorage.getItem("usuarioId")}
                </p>
                <Link to="/" className="btn btn-primary mt-3">
                    Voltar para Login
                </Link>
                <Link to="/horarios-profissional" className="btn btn-primary mt-3">
                    Horários do profissional
                </Link>
                <Link to="/agendamentos-profissional" className="btn btn-primary mt-3">
                    Visualizar Agendamentos
                </Link>
            </div>
        </div>
    );
}
