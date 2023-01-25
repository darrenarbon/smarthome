import logo from './home-back.png';

export const Splash = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center px-0 border border-2 border-top-0">
          <h1>Home Management System</h1>
          <img src={logo} className="img-fluid" alt="smart home" />
          <h3>Shortcuts</h3>
        </div>
      </div>
    </div>
  );
};

export default Splash;
