import Participante from "./Participante";
import Respuesta from "./Respuesta";

const ParticipantesYRespuestas = ({ participantes, respuestas }) => {
  return (
    <div className="container mx-auto flex mb-10">
      <div className='w-4/12'>
        <h2 className="text-gray-800 text-lg md:text-2xl mt-6 text-center">
          Listado de participantes
        </h2>
          {participantes.map((persona) => (
            <Participante key={persona.id} persona={persona} />
          ))}
      </div>
      <div className='w-8/12'>
        <h2 className="text-gray-800 text-lg md:text-2xl mt-6 text-center">
          Respuestas
        </h2>
          {respuestas.map((respuesta) => (
            <Respuesta key={respuesta.id} respuesta={respuesta} />
          ))}
      </div>
    </div>
  );
};

export default ParticipantesYRespuestas;
