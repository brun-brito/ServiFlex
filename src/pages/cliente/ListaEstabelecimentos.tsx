import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api"; // API de requisições configurada
import { Estabelecimento } from "../../types"; // Definir tipo para Estabelecimento

export default function ListarEstabelecimentos() {
    const [estabelecimentos, setEstabelecimentos] = useState<Estabelecimento[]>([]);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Função que busca os estabelecimentos na API
        const fetchEstabelecimentos = async () => {
            setLoading(true);
            setErro("");
            try {
                const response = await api.get("/estabelecimentos");
                setEstabelecimentos(response.data); // Armazena os estabelecimentos no estado
            } catch (err) {
                setErro("Erro ao carregar os estabelecimentos.");
            } finally {
                setLoading(false);
            }
        };

        fetchEstabelecimentos();
    }, []);

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-end mb-3">
            </div>
            <h2 className="text-center mb-4">Lista de Estabelecimentos</h2>
            {erro && <div className="alert alert-danger">{erro}</div>}
            {loading ? (
                <div className="text-center">Carregando...</div>
            ) : (
                <div>
                    {estabelecimentos.map((estabelecimento) => (
                        <div
                            key={estabelecimento.id}
                            className="d-flex align-items-center mb-4 p-3 border rounded shadow-sm"
                            style={{ backgroundColor: "#f9f9f9" }}
                        >
                            {/* Imagem à esquerda */}
                            <img
                                src={estabelecimento.imagem_url?.trim() || "https://placehold.co/100?text=Sem+Imagem"}
                                alt={estabelecimento.nome}
                                onError={(e) => {
                                    if (e.currentTarget.src !== "https://placehold.co/100?text=Sem+Imagem") {
                                        e.currentTarget.src = "https://placehold.co/100?text=Sem+Imagem";
                                    }
                                }}
                                className="img-fluid"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    marginRight: "20px",
                                }}
                            />
                            {/* Nome do estabelecimento */}
                            <div className="d-flex flex-column">
                                <h5 className="mb-2" style={{ fontWeight: "bold" }}>
                                    {estabelecimento.nome}
                                </h5>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => navigate(`/procedimentos/${estabelecimento.id}`)} // Redireciona para ListarProcedimentos.tsx
                                    style={{ alignSelf: "flex-start" }}
                                >
                                    Selecionar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
