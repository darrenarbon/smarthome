import { Route, Routes } from 'react-router-dom';
import { Hive } from '../Hive/Hive';
import Splash from '../Splash/Splash';

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="hive" element={<Hive />} />
      <Route path="/" element={<Splash />} />
    </Routes>
  );
};

export default AppRouter;
