import axios from "axios";

export const postEspecial = async (ruta, datos, setId, setSuccess) => {
  try {
    const response = await axios.post(ruta, datos);
    console.log("Proceso exitoso: ", response.data);
    setId(response.data.id);
    setSuccess(true);
  } catch (err) {
    console.error("Error: ", err);
    setSuccess(false);
  }
};

export const postUnion = async (ruta, datos) => {
  try {
    const response = await axios.post(ruta, datos);
    console.log("Proceso exitoso: ", response.data);
  } catch (err) {
    console.error("Error: ", err);
  }
};

export const getAxios = async (ruta, setDatos) => {
  try {
    const response = await axios.get(ruta);
    console.log("Proceso exitoso: ", response.data);
    setDatos(response.data);
  } catch (err) {
    console.error("Error:", err);
  }
};
