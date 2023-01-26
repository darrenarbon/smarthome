import { Product } from '../Hive/hiveTypes';
import { LightSmall } from '../Hive/Light/LIghtSmall';
import logo from './home-back.png';

type SplashProps = {
  hiveProducts: Product[];
};
export const Splash = ({ hiveProducts }: SplashProps) => {
  const favouriteDevices = ['453bd2fe-51c8-43d1-a984-b7abb69db88d'];
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center px-0 border border-2 border-top-0">
          <h1>Home Management System</h1>
          <img src={logo} className="img-fluid" alt="smart home" />
          <h3>Shortcuts</h3>
          <div className="container">
            <div className="row mb-2">
              {favouriteDevices.map((deviceId) => {
                const hiveDevice = hiveProducts.find(
                  (product) => product.id === deviceId
                );
                if (hiveDevice) {
                  return <LightSmall product={hiveDevice} />;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
