import { Route, Routes } from 'react-router-dom';
import { Hive } from '../Hive/Hive';
import { Product } from '../Hive/hiveTypes';
import Splash from '../Splash/Splash';

type AppRouterProps = {
  hiveProducts: Product[];
  loadProducts: () => void;
};

const AppRouter = ({
  hiveProducts,
  loadProducts,
}: AppRouterProps): JSX.Element => {
  return (
    <Routes>
      <Route
        path={'hive'}
        element={<Hive products={hiveProducts} loadProducts={loadProducts} />}
      />
      <Route path="/" element={<Splash hiveProducts={hiveProducts} />} />
    </Routes>
  );
};

export default AppRouter;
