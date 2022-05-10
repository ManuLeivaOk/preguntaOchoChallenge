import { useState } from "react";
import FormularioDatos from "./components/FormularioDatos";
import Header from "./components/Header";
import ParticipantesYRespuestas from "./components/ParticipantesYRespuestas";

function App() {
  const [participantes, setParticipantes] = useState([]);
  const [respuestas, setRespuestas] = useState([]);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  return (
    <>
      <Header />
      <FormularioDatos
        participantes={participantes}
        setParticipantes={setParticipantes}
        modal={modal}
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        respuestas={respuestas}
        setRespuestas={setRespuestas}
      />
      <ParticipantesYRespuestas
        participantes={participantes}
        respuestas={respuestas}
      />
    </>
  );
}

export default App;
