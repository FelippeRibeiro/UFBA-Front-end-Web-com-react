import React, { useState } from "react";
import Table from "./Table2";
import Form from "./Form";
const initialAgenda = [
  {
    dia: "Segunda-feira",
    disciplina: "Programação Web",
    horario: "08:00 às 11:30",
  },
  {
    dia: "Terça-feira",
    disciplina: "Análise de Algoritmos",
    horario: "08:00 às 11:30",
  },
  {
    dia: "Quarta-feira",
    disciplina: "Programação OO",
    horario: "14:00 às 17:00",
  },
  {
    dia: "Quinta-feira",
    disciplina: "Engenharia de Requisitos",
    horario: "14:00 às 17:00",
  },
  {
    dia: "Sexta-feira",
    disciplina: "Churrasco e descanso",
    horario: "14:00 às 17:00",
  },
];
function App() {
  const [agenda, setAgenda] = useState(initialAgenda);
  function removerDisciplina(disciplina) {
    setAgenda((prv) => prv.filter((el) => el.disciplina !== disciplina));
  }
  function setDisciplina(disciplina) {
    if (!disciplina.dia || !disciplina.disciplina || !disciplina.horario) {
      alert("Preencha todos os campos!");
      return;
    }
    setAgenda((prv) => [...prv, disciplina]);
  }

  return (
    <div className="container">
      <h1 className="text-center">Agenda Semanal</h1>
      <Table agenda={agenda} remover={removerDisciplina} />
      <Form addAgenda={setDisciplina}> </Form>
    </div>
  );
}
export default App;
