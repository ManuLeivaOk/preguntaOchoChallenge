import React from "react";

const Respuesta = ({ respuesta }) => {
  const { pregunta1, pregunta2, pregunta3, pregunta4 } = respuesta;

  return (
      <div className="p-5 bg-gray-100 rounded shadow-xl mt-5 opacity-85 text-center minAlto md:ml-12 flex flex-col justify-center">
        <p className="font-bold mb-3 text-gray-500 uppercase">
          1: {""}
          <span className="font-normal normal-case">{pregunta1}</span>
        </p>

        <p className="font-bold mb-3 text-gray-500 uppercase">
          2: {""}
          <span className="font-normal normal-case">{pregunta2}</span>
        </p>

        <p className="font-bold mb-3 text-gray-500 uppercase">
          3: {""}
          <span className="font-normal normal-case">{pregunta3}</span>
        </p>

        <p className="font-bold mb-3 text-gray-500 uppercase">
          4: {""}
          <span className="font-normal normal-case">{pregunta4}</span>
        </p>
      </div>
  );
};

export default Respuesta;
