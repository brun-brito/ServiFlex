import { Link } from "react-router-dom";

// @Camargo implementar lista de estabelecimentos
export default function ListaEstabelecimentos() {
    return (
        <div className="container d-flex vh-100 align-items-center justify-content-center">
            <div className="card text-center p-5">
                <h2 className="mb-3 text-success">
                    Login realizado com sucesso para o cliente!
                </h2>
                <p>
                    Você foi autenticado com sucesso.
                    id: {localStorage.getItem("usuarioId")}
                </p>
                <Link to="/" className="btn btn-primary mt-3">
                    Voltar para Login
                </Link>
            </div>
        </div>
    );
}
