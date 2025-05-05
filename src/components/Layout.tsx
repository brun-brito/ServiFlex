import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-bottom">
        <div className="container d-flex align-items-center justify-content-between py-3">
          <div className="d-flex align-items-center">
            <i className="bi bi-tools text-primary fs-4 me-2"></i>
            <h4 className="mb-0 text-primary fw-bold">Serviflex</h4>
          </div>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Sair
          </button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-fill container py-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-top shadow-sm mt-auto py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <small className="text-muted">
            &copy; {new Date().getFullYear()} Serviflex. Todos os direitos reservados.
          </small>
        </div>
      </footer>
    </div>
  );
}