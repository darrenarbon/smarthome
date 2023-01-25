import { Product } from '../hiveTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { changeBrightness, toggleLight } from '../hiveHelper';

export type LightProps = {
  product: Product;
};

export const Light = ({ product }: LightProps) => {
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
                  icon={['fas', 'lightbulb']}
                  className="fa-2x"
                  style={{ color: '#e1dd60' }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={['far', 'lightbulb']}
                  className="fa-2x"
                />
              )}
            </button>
          </div>
          <div className="col-9">
            <div className="card-body">
              <h5 className="card-title">{product.state.name}</h5>
              <p className="card-text">
                {product.props.online && (
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="10"
                    step="0.5"
                    id="customRange3"
                    onMouseUp={(e) => changeBrightness(e, product)}
                    defaultValue={
                      product.state.brightness && product.state.brightness / 10
                    }
                  />
                )}
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
