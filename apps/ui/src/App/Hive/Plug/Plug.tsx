import { Product } from '../hiveTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleLight } from '../hiveHelper';

export type PlugProps = {
  product: Product;
};

export const Plug = ({ product }: PlugProps) => {
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
                  icon={['fas', 'plug']}
                  className="fa-2x"
                  style={{ color: '#e1dd60' }}
                />
              ) : (
                <FontAwesomeIcon icon={['fas', 'plug']} className="fa-2x" />
              )}
            </button>
          </div>
          <div className="col-9">
            <div className="card-body">
              <h5 className="card-title">{product.state.name}</h5>
              <p className="card-text">
                <small className="text-muted">
                  {!product.props.online && <span>Offline</span>}
                  {product.props.online && (
                    <span>MODE: {product.state.mode}</span>
                  )}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
