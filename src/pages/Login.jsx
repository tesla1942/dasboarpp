import { useNavigate } from "react-router-dom";
import { UseForm } from "../Hook/UseForm";

export const Login = () => {
  const navigate = useNavigate();

  
  const {
    name,
    email,
    password,
    handleChange,
    resetForm,
  } = UseForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    
    navigate("/dashboard", {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });

    resetForm(); 
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <div className="input-group">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label htmlFor="name">Nombre</label>
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label htmlFor="password">Contraseña</label>
        </div>
        <button>Entrar</button>
      </form>
    </div>
  );
};
