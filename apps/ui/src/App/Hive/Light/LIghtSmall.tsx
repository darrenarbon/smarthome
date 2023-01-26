import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleLight } from '../hiveHelper';
import { Product } from '../hiveTypes';

type LightSmallProps = {
  product: Product;
};

export const LightSmall = ({ product }: LightSmallProps) => {
  return (
    <div
      className="col-6 col-sm-4 col-md-3 "
      key={product.id}
      onClick={() => toggleLight(product)}
    >
      <div className="card">
        <div className="card-header">{product.state.name}</div>
        <div className="card-body">
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
              <FontAwesomeIcon icon={['far', 'lightbulb']} className="fa-2x" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
