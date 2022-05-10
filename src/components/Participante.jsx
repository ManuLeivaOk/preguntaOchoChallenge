const Participante = ({ persona }) => {
  const { nombre, direccion, fecha, email, sexo } = persona;

  return (
    <div className="p-5 bg-gray-100 rounded shadow-xl mt-5 opacity-85 text-center minAlto my-auto flex flex-col justify-center">
      <p className="font-bold mb-3 text-gray-500 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-500 uppercase">
        Dirección: {""}
        <span className="font-normal normal-case">{direccion}</span>
      </p>

      <p className="font-bold mb-3 text-gray-500 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-500 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-500 uppercase">
        Sexo: {""}
        <span className="font-normal normal-case">{sexo}</span>
      </p>
    </div>
  );
};

export default Participante;
