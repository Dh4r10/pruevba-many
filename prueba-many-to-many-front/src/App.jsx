import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [chedked, setChedked] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState({
    nombre: "",
    descripcion: "",
  });

  const handleCheckbox = (e) => {
    setChedked(e.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTipoUsuario({ ...tipoUsuario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tipoUsuario);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>TIPO DE USUARIO</h3>
      <div style={{ display: "grid", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="descripcion">Descripcion</label>
          <input type="text" id="descripcion" name="descripcion" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="estado">Estado</label>
          <input
            type="checkbox"
            name="estado"
            id="estado"
            onChange={handleChange}
            defaultChecked={false}
          />
        </div>
      </div>
      <hr />
      <h3>MODULOS 1</h3>
      <div style={{ display: "grid", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="nombreM1">Nombre</label>
          <input type="text" id="nombreM1" name="nombreM1" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="descripcionM1">Descripcion</label>
          <input type="text" id="descripcionM1" name="descripcionM1" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="estadoM1">Estado</label>
          <input
            type="checkbox"
            name="estadoM1"
            id="estadoM1"
            // onChange={handleChange}
            defaultChecked={false}
          />
        </div>
      </div>
      <hr />
      <h3>MODULOS 2</h3>
      <div style={{ display: "grid", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="nombreM2">Nombre</label>
          <input type="text" id="nombreM2" name="nombreM2" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="descripcionM2">Nombre</label>
          <input type="text" id="descripcionM2" name="descripcionM2" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="estadoM2">Estado</label>
          <input
            type="checkbox"
            name="estadoM2"
            id="estadoM2"
            // onChange={handleChange}
            defaultChecked={false}
          />
        </div>
      </div>
      <hr />
      ¿SI?
      <input
        type="checkbox"
        name="activateM2"
        id="activateM2"
        onChange={handleCheckbox}
        defaultChecked={chedked}
        style={{ marginTop: "20px" }}
      />
      <h3>MODULOS 3</h3>
      <div style={{ display: "grid", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="nombreM3">Nombre</label>
          <input type="text" id="nombreM3" name="nombreM3" disabled={chedked} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="descripcionM3">Nombre</label>
          <input
            type="text"
            id="descripcionM3"
            name="descripcionM3"
            disabled={chedked}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="estadoM3">Estado</label>
          <input
            type="checkbox"
            name="estadoM3"
            id="estadoM3"
            // onChange={handleChange}
            defaultChecked={false}
          />
        </div>
      </div>
      <hr />
      <button style={{ marginTop: "10px" }} type="submit">
        Enviar
      </button>
    </form>
  );
}

export default App;
