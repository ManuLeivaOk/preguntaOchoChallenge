import { useState } from "react";
import close from "../assets/images/close.png";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  respuestas,
  setRespuestas,
  participantes,
}) => {
  const [mensaje, setMensaje] = useState(false);
  const [pregunta1, setPregunta1] = useState("");
  const [pregunta2, setPregunta2] = useState("");
  const [pregunta3, setPregunta3] = useState("");
  const [pregunta4, setPregunta4] = useState("");

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return fecha + random;
  };

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
      participantes.pop();
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([pregunta1, pregunta2, pregunta3, pregunta4].includes("")) {
      setMensaje(true);
      return;
    }

    setMensaje(false);

    const objetoRespuestas = {
      pregunta1,
      pregunta2,
      pregunta3,
      pregunta4,
      id: generarId(),
    };

    setRespuestas([...respuestas, objetoRespuestas]);

    setModal(false);
  };

  return (
    <div className="modal">
      <div className="cerrarModal">
        <img
          src={close}
          alt="imgCerrarModal"
          className="imgCerrarModal cursor-pointer"
          onClick={ocultarModal}
        />
      </div>
      <h2 className="text-center text-white font-bold text-xl md:text-xl mt-32 md:mt-16 uppercase">
        Responde a estas preguntas
      </h2>
      <div className="mt-18 mx-5 ">
        <form
          onSubmit={handleSubmit}
          className={`modalForm formulario flex flex-col items-center text-center ${
            animarModal ? "formularioAnimar" : ""
          }`}
        >
          <label className="text-white mt-10">
            ¿Cuál es la promesa más importante que te has hecho?
          </label>
          <textarea
            className="w-full mt-3 p-2 rounded-lg border border-gray-600"
            maxLength="200"
            value={pregunta1}
            onChange={(e) => setPregunta1(e.target.value)}
          ></textarea>

          <label className="text-white mt-3">
            ¿Cuándo te diste cuenta de que habías entrado en la adultez?
          </label>
          <textarea
            className="w-full mt-3 p-2 rounded-lg border border-gray-600"
            maxLength="200"
            value={pregunta2}
            onChange={(e) => setPregunta2(e.target.value)}
          ></textarea>

          <label className="text-white mt-3">
            ¿Con qué personaje de ficción te identificas más?
          </label>
          <textarea
            className="w-full mt-3 p-2 rounded-lg border border-gray-600"
            maxLength="200"
            value={pregunta3}
            onChange={(e) => setPregunta3(e.target.value)}
          ></textarea>

          <label className="text-white mt-3">
            ¿Porqué estás pensando en contratar a Manuel Leiva para tu equipo?
          </label>
          <textarea
            className="w-full mt-3 p-2 rounded-lg border border-gray-600"
            maxLength="200"
            value={pregunta4}
            onChange={(e) => setPregunta4(e.target.value)}
          ></textarea>

          {mensaje ? (
            <p className="bg-red-300 w-8/12 md:w-full text-center uppercase p-1 rounded">
              Debes completar todos los campos
            </p>
          ) : null}
          <input
            value="Enviar"
            type="submit"
            className="bg-gray-300 p-2 w-8/12 md:w-8/12 mt-4 uppercase font-bold cursor-pointer hover:bg-gray-400 transition-all"
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
