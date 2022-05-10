import { useState } from "react";
import Modal from "./Modal";

const FormularioDatos = ({
  participantes,
  setParticipantes,
  modal,
  setModal,
  animarModal,
  setAnimarModal,
  respuestas,
  setRespuestas
}) => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fecha, setFecha] = useState("");
  const [email, setEmail] = useState("");
  const [sexo, setSexo] = useState("");

  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, direccion, fecha, email, sexo].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const objetoParticipantes = {
      nombre,
      direccion,
      fecha,
      email,
      sexo,
      id: generarId(),
    };

    setParticipantes([...participantes, objetoParticipantes]);

    setNombre("");
    setDireccion("");
    setFecha("");
    setEmail("");
    setSexo("");

    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  return (
    <div className="w-11/12 md:w-6/12 mx-auto bg-gray-100 rounded shadow-xl mt-5 opacity-85">
      <form className="p-9" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre" className="text-gray-500 font-bold uppercase">
            Nombre
          </label>
          <input
            id="nombre"
            className="w-full my-2 border border-gray-300 p-2 rounded-md"
            type="text"
            placeholder="Añade tu nombre de pila"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="direccion"
            className="text-gray-500 font-bold uppercase"
          >
            Dirección
          </label>
          <input
            id="direccion"
            className="w-full my-2 border border-gray-300 p-2 rounded-md"
            type="text"
            placeholder="Añade tu dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fecha" className="text-gray-500 font-bold uppercase">
            Fecha de nacimiento
          </label>
          <input
            id="fecha"
            className="w-full my-2 border border-gray-300 p-2 rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-gray-500 font-bold uppercase">
            Email
          </label>
          <input
            id="email"
            className="w-full my-2 border border-gray-300 p-2 rounded-md"
            type="email"
            placeholder="Añade tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="sexo" className="text-gray-500 font-bold uppercase">
            Sexo
          </label>
          <select
            id="sexo"
            className="my-2 ml-3 border border-gray-300 p-2 rounded-md"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          >
            <option>Seleccionar</option>
            <option>Hombre</option>
            <option>Mujer</option>
            <option>No binario</option>
            <option>Prefiero no decirlo</option>
          </select>
        </div>
        {error ? (
          <p className="bg-red-400 rounded p-1 text-center mt-3 text-white uppercase">
            Todos los campos son obligatorios
          </p>
        ) : null}
        <input
          className="w-full mt-5 border border-gray-300 bg-gray-700 text-gray-100 rounded cursor-pointer p-2 uppercase font-bold hover:bg-gray-600 transition-all"
          type="submit"
          value="Acceder al cuestionario"
        />
      </form>
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          respuestas={respuestas}
          setRespuestas={setRespuestas}
          participantes={participantes}
        />
      )}
    </div>
  );
};

export default FormularioDatos;
