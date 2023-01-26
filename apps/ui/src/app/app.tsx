import { BrowserRouter, Link } from 'react-router-dom';
import './app.module.css';
import AppRouter from './routing/AppRouter';
import '../fontAwesome';
import axios from 'axios';
import { Product } from './Hive/hiveTypes';
import { useEffect, useState } from 'react';

export const App = () => {
  const [hiveProducts, setHiveProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    axios
      .get('/api/hive/products')
      .then((a) => a.data)
      .then((products: Product[]) => {
        setHiveProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      loadProducts();
    }, 10000);
    loadProducts();
    return () => clearInterval(intervalId);
  }, []);
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
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/hive" className="nav-link">
                Hive
              </Link>

              <Link to="/solar" className="nav-link">
                Solar
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <AppRouter hiveProducts={hiveProducts} loadProducts={loadProducts} />
      </main>
    </BrowserRouter>
  );
};

export default App;
