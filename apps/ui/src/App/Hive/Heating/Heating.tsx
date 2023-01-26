import { Product } from '../hiveTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleLight } from '../hiveHelper';
import { useEffect, useState } from 'react';

export type HeatingProps = {
  product: Product;
};

export const Heating = ({ product: heating }: HeatingProps) => {
  const [currentTemp, setCurrentTemp] = useState<number>(15);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const isBoost = heating.props.online && heating.state.mode === 'BOOST';
  const isOn =
    isBoost || (heating.props.online && heating.state.status === 'ON');

  const increaseTemp = () => {
    const newTemp = currentTemp + 1;
    setCurrentTemp(newTemp);
    if (newTemp >= 20) {
      setTemperatureColor('hot');
    } else if (newTemp >= 15) {
      setTemperatureColor('neutral');
    }
  };

  const decreaseTemp = () => {
    const newTemp = currentTemp - 1;
    setCurrentTemp(newTemp);
    console.log(newTemp);
    if (newTemp < 15) {
      setTemperatureColor('cold');
    } else if (newTemp < 20) {
      setTemperatureColor('neutral');
    }
  };

  useEffect(() => {
    if (heating.props.temperature) {
      const currentTemp = heating.props.temperature;
      setCurrentTemp(heating.props.temperature);
      if (currentTemp >= 20) {
        setTemperatureColor('hot');
      } else if (currentTemp < 15) {
        setTemperatureColor('cold');
      } else {
        setTemperatureColor('neutral');
      }
    }
  }, [heating.props.temperature]);

  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
      key={heating.id}
    >
      <div className="card">
        <div className="row g-0">
          <div
            className="col-3 text-center"
            onClick={() => toggleLight(heating)}
          >
            <button className="btn btn-link text-dark h-100 align-middle">
              {isOn ? (
                <FontAwesomeIcon
                  icon={['fas', 'fire']}
                  className="fa-2x"
                  style={{ color: '#e1dd60' }}
                />
              ) : (
                <FontAwesomeIcon icon={['fas', 'fire']} className="fa-2x" />
              )}
              {isBoost ? (
                <FontAwesomeIcon
                  icon={['fas', 'bullseye']}
                  className="fa-2x blob red"
                  style={{ color: 'rgba(255,82,82)' }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={['fas', 'bullseye']}
                  className="fa-2x m-2"
                />
              )}
            </button>
          </div>
          <div className="col-9">
            <div className="m-1">
              <div className="temperature-display-container mb-1">
                <div className={`temperature-display ${temperatureColor}`}>
                  {currentTemp}°C
                </div>
                {isBoost && (
                  <div className="temperature-display">
                    {heating.state.target}°C
                    <br />
                    {heating.state.boost}m
                  </div>
                )}
              </div>
              <div className="button-container">
                <button className="temperature minus" onClick={decreaseTemp}>
                  -
                </button>
                <button
                  className={`temperature-text ${isBoost ? 'active' : ''}`}
                >
                  BOOST
                </button>
                <button className="temperature plus" onClick={increaseTemp}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
