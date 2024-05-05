import { useEffect, useRef, useState } from "react";
import Select from 'react-select'
import "./App.css";
import { postEspecial, postUnion, getAxios } from "./method";
import { tipoUsuarioAPI, modulosAPI, permisosAPI } from "./rutas";

function App() {

  // ESTADOS
  const [modulos, setModulos] = useState([])

  useEffect(() => {
    getAxios(modulosAPI, setModulos)
  }, [])

  const [chedked, setChedked] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState({
    nombre: "",
    descripcion: "",
    estado: "",
  });
  const [idTipoUsuario, setIdTipoUsuario] = useState()
  const [exitoso1, setExitoso1] = useState(false)

  const [modulo1, setModulo1] = useState({
    nombre: "",
    descripcion: "",
    estado: "",
  });
  const [idModulo1, setIdModulo1] = useState()
  const [exitoso2, setExitoso2] = useState(false)

  const [modulo2, setModulo2] = useState({
    nombre: "",
    descripcion: "",
    estado: "",
  });
  const [idModulo2, setIdModulo2] = useState()
  const [exitoso3, setExitoso3] = useState(false)

  const [modulo3, setModulo3] = useState({
    nombre: "",
    descripcion: "",
    estado: "",
  });
  const [idModulo3, setIdModulo3] = useState()
  const [exitoso4, setExitoso4] = useState(false)

  const [activateConnect, setActivateConnect] = useState(false)

  //FUNCIONES
  const handleCheckbox = (e) => {
    setChedked(e.target.checked);
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setTipoUsuario({ ...tipoUsuario, [name]: newValue });
  };

  const handleChangeM1 = (e) => {
    const { name, value, checked, type } = e.target;
    // Conserva el nombre original del campo
    const fieldName = name;

    // Asigna el valor del campo al campo original y a la nueva variable 'nombre'
    if (fieldName === 'nombreM1') {
      setModulo1({ ...modulo1, nombre: value });
    }
    if (fieldName === 'descripcionM1') {
      setModulo1({ ...modulo1, descripcion: value });
    }
    if (fieldName === 'estadoM1') {
      const newValue = type === 'checkbox' ? checked : value;
      setModulo1({ ...modulo1, estado: newValue });
    }

  };

  const handleChangeM2 = (e) => {
    const { name, value, checked, type } = e.target;
    // Conserva el nombre original del campo
    const fieldName = name;

    // Asigna el valor del campo al campo original y a la nueva variable 'nombre'
    if (fieldName === 'nombreM2') {
      setModulo2({ ...modulo2, nombre: value });
    }
    if (fieldName === 'descripcionM2') {
      setModulo2({ ...modulo2, descripcion: value });
    }
    if (fieldName === 'estadoM2') {
      const newValue = type === 'checkbox' ? checked : value;
      setModulo2({ ...modulo2, estado: newValue });
    }
  };

  const handleChangeM3 = (e) => {
    const { name, value, checked, type } = e.target;
    // Conserva el nombre original del campo
    const fieldName = name;

    // Asigna el valor del campo al campo original y a la nueva variable 'nombre'
    if (fieldName === 'nombreM3') {
      setModulo3({ ...modulo3, nombre: value });
    }
    if (fieldName === 'descripcionM3') {
      setModulo3({ ...modulo3, descripcion: value });
    }
    if (fieldName === 'estadoM3') {
      const newValue = type === 'checkbox' ? checked : value;
      setModulo3({ ...modulo3, estado: newValue });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const promises = [
      postEspecial(tipoUsuarioAPI, tipoUsuario, setIdTipoUsuario, setExitoso1),
      postEspecial(modulosAPI, modulo1, setIdModulo1, setExitoso2),
      postEspecial(modulosAPI, modulo2, setIdModulo2, setExitoso3),
    ]

    if (!chedked) {
      promises.push(postEspecial(modulosAPI, modulo3, setIdModulo3, setExitoso4))
    }

    await Promise.all(promises)

    console.log("ready2")
    setActivateConnect(!activateConnect)

  };

  useEffect(() => {
    (async () => {
      if (!chedked) {
        if (exitoso1 && exitoso2 && exitoso3 && exitoso4) {

          const union1 = {
            id_tipo_usuario: idTipoUsuario,
            id_modulos: idModulo1,
          }
          const union2 = {
            id_tipo_usuario: idTipoUsuario,
            id_modulos: idModulo2,
          }
          const union3 = {
            id_tipo_usuario: idTipoUsuario,
            id_modulos: idModulo3,
          }

          const promises = [
            postUnion(permisosAPI, union1),
            postUnion(permisosAPI, union2),
            postUnion(permisosAPI, union3),
          ]

          await Promise.all(promises)
        }
        setExitoso1(false)
        setExitoso2(false)
        setExitoso3(false)
        setExitoso4(false)
      } else {
        if (exitoso1 && exitoso2 && exitoso3) {
          // setActivateConnect(!activateConnect)
          const union1 = {
            id_tipo_usuario: idTipoUsuario,
            id_modulos: idModulo1,
          }
          const union2 = {
            id_tipo_usuario: idTipoUsuario,
            id_modulos: idModulo2,
          }

          const promises = [
            postUnion(permisosAPI, union1),
            postUnion(permisosAPI, union2),
          ]

          await Promise.all(promises)
        }
        setExitoso1(false)
        setExitoso2(false)
        setExitoso3(false)
      }
    })();
  }, [activateConnect])

  const [selectedOption, setSelectedOption] = useState(null);
  const inputRef = useRef('');

  const onselectionchange = (selectedOption) => {
    console.log(selectedOption)
  }

  const handleInputChange = (inputValue) => {
    inputRef.current = inputValue;
  };

  const customOption = { id: null, nombre: inputRef.current };

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
          <input type="text" id="descripcion" name="descripcion" onChange={handleChange} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="estado">Estado</label>
          <input
            type="checkbox"
            name="estado"
            id="estado"
            onChange={handleChange}
          />
        </div>
      </div>
      <hr />
      <h3>MODULOS 1</h3>
      <div style={{ display: "grid", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="nombreM1">Nombre</label>
          <input type="text" id="nombreM1" name="nombreM1" onChange={handleChangeM1} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="descripcionM1">Descripcion</label>
          <input type="text" id="descripcionM1" name="descripcionM1" onChange={handleChangeM1} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="estadoM1">Estado</label>
          <input
            type="checkbox"
            name="estadoM1"
            id="estadoM1"
            onChange={handleChangeM1}
          />
        </div>
      </div>
      <hr />
      <h3>MODULOS 2</h3>
      <div style={{ display: "grid", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="nombreM2">Nombre</label>
          <input type="text" id="nombreM2" name="nombreM2" onChange={handleChangeM2} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="descripcionM2">Nombre</label>
          <input type="text" id="descripcionM2" name="descripcionM2" onChange={handleChangeM2} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="estadoM2">Estado</label>
          <input
            type="checkbox"
            name="estadoM2"
            id="estadoM2"
            onChange={handleChangeM2}
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
          <input type="text" id="nombreM3" name="nombreM3" disabled={chedked} onChange={handleChangeM3} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="descripcionM3">Nombre</label>
          <input
            type="text"
            id="descripcionM3"
            name="descripcionM3"
            disabled={chedked}
            onChange={handleChangeM3}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="estadoM3">Estado</label>
          <input
            type="checkbox"
            name="estadoM3"
            id="estadoM3"
            onChange={handleChangeM3}
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
