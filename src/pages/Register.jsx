import { useNavigate } from "react-router-dom";
import { UseForm } from "../Hook/UseForm"; 

export const Register = () => {
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
        <h1>Registrarse</h1>
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
          <label htmlFor="name">nombre</label>
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
          <label htmlFor="email">email</label>
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
          <label htmlFor="password">contraseña</label>
        </div>
        <button>Registrarse</button>
      </form>
    </div>
  );
};
