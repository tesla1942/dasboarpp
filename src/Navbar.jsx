import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // Use the correct destructuring syntax

  

  const handleLogout = () => {
    navigate('/login', { replace: true }); // Call navigate with correct syntax
  };

  return (
    <>
      <header>
        <h1>
          <Link to="/">logo</Link>
        </h1>

        {state?.logged ? (
          <div className="user">
            <span className="user-name">{state?.name}</span>
            <button className="btn-logout" onClick={handleLogout}>
              cerrar sesion
            </button>
          </div>
        ) : (
          <nav>
            <Link to="/login">iniciar sesion</Link>
            <Link to="/register">Registrarse</Link>
          </nav>
        )}
      </header>

      <Outlet />
    </>
  );
};
