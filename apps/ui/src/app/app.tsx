import { BrowserRouter, Link } from 'react-router-dom';
import './app.module.css';
import AppRouter from './routing/AppRouter';
import '../fontAwesome';

export const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" aria-current="page">
            Darren's Smart Home
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
              <Link to="/hive" className="nav-link active" aria-current="page">
                Hive
              </Link>

              <a className="nav-link" href="#">
                Solar
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <AppRouter />
      </main>
    </BrowserRouter>
  );
};

export default App;
