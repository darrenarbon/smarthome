import { Product } from '../hiveTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleLight } from '../hiveHelper';

export type HeatingProps = {
  product: Product;
};

export const Heating = ({ product }: HeatingProps) => {
  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
      key={product.id}
    >
      <div className="card">
        <div className="row g-0">
          <div
            className="col-3 text-center"
            onClick={() => toggleLight(product)}
          >
            <button className="btn btn-link text-dark h-100 align-middle">
              {product.props.online &&
              product.state.status &&
              product.state.status === 'ON' ? (
                <FontAwesomeIcon
                  icon={['fas', 'fire']}
                  className="fa-2x"
                  style={{ color: '#e1dd60' }}
                />
              ) : (
                <FontAwesomeIcon icon={['fas', 'faucet']} className="fa-2x" />
              )}
            </button>
          </div>
          <div className="col-9">
            <div className="m-1">
              <div className="temperature-display-container">
                <div className="temperature-display">
                  {product.props.temperature}°C
                </div>
              </div>
              <div className="button-container">
                <button className="temperature minus">-</button>
                <button className="temperature-text">BOOST</button>
                <button className="temperature plus">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
