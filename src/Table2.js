import React from "react";
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Dia da Semana</th>
        <th>Disciplina</th>
        <th>Horários</th>
        <th>Remover Disciplina</th>
      </tr>
    </thead>
  );
};
const TableBody = (props) => {
  const rows = props.agenda.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.dia}</td>
        <td>{row.disciplina}</td>
        <td>{row.horario}</td>
        <td>
          <button
            onClick={() => {
              props.remover(row.disciplina);
            }}
          >
            Remover
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

function Table(props) {
  const { agenda, remover } = props;
  return (
    <table>
      <TableHeader />
      <TableBody agenda={agenda} remover={remover} />
    </table>
  );
}
export default Table;
