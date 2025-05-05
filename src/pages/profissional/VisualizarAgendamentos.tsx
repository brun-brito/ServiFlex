import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Agendamento } from "../../types";

export default function VisualizarAgendamentos() {
    const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
    const [erro, setErro] = useState("");
    const [loading, setLoading] = useState(true);
    const profissionalId = localStorage.getItem("usuarioId");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAgendamentos = async () => {
            try {
                const profissionalId = localStorage.getItem("usuarioId");
                console.log("profissionalId:", profissionalId); // Verifique se o ID está correto
                
                if (!profissionalId) {
                    setErro("Profissional não encontrado.");
                    setLoading(false);
                    return;
                }
    
                const response = await api.get(`/agendamentos/profissional/${profissionalId}`);
                console.log("Resposta do backend:", response);
                console.log("Dados da resposta:", response.data);
    
                if (response.status === 200 && Array.isArray(response.data)) {
                    setAgendamentos(response.data);
                } else {
                    setErro("Nenhum agendamento encontrado.");
                }
            } catch (err) {
                console.log("Erro ao carregar os agendamentos:", err);
                setErro("Erro ao carregar os agendamentos.");
            } finally {
                setLoading(false);
            }
        };
        fetchAgendamentos();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Agendamentos</h2>

            {erro && <div className="alert alert-danger">{erro}</div>}

            {loading ? (
                <div className="text-center">Carregando agendamentos...</div>
            ) : agendamentos.length === 0 ? (
                <div className="alert alert-info">Nenhum agendamento encontrado.</div>
            ) : (
                agendamentos.map((agendamento) => (
                    <div
                        key={agendamento.id}
                        className="p-3 mb-3 border rounded shadow-sm"
                        style={{ backgroundColor: "#f9f9f9" }}
                    >
                        <p><strong>Cliente:</strong> {agendamento.cliente_nome || 'Nome não disponível'}</p>
                        <p><strong>Procedimento:</strong> {agendamento.procedimento}</p>
                        <p><strong>Data e Hora:</strong> {new Date(agendamento.data_hora).toLocaleString()}</p>
                    </div>
                ))
            )}

            <button className="btn btn-secondary mt-4" onClick={() => navigate(-1)}>
                Voltar
            </button>
        </div>
    );
}
