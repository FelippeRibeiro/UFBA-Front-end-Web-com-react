import React, { useState } from "react";

export default function Form(props) {
  const [agenda, setAgenda] = useState({
    dia: "",
    disciplina: "",
    horario: "",
  });
  return (
    <div>
      <h4 className="text-center">Adicionar Dicispina</h4>
      <form>
        <div className="form-group">
          <label>Dia da semana</label>
          <input
            type="text"
            className="form-control"
            placeholder="Dia"
            value={agenda.dia}
            onChange={(e) => setAgenda({ ...agenda, dia: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Disciplina</label>
          <input
            type="text"
            className="form-control"
            placeholder="Disciplina"
            value={agenda.disciplina}
            onChange={(e) =>
              setAgenda({ ...agenda, disciplina: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Horarios</label>
          <input
            type="text"
            className="form-control"
            placeholder="Horarios"
            value={agenda.horario}
            onChange={(e) => setAgenda({ ...agenda, horario: e.target.value })}
          />
        </div>

        <input
          type="button"
          value="Adicionar"
          className="btn btn-primary"
          onClick={() => {
            props.addAgenda(agenda);
          }}
        />
      </form>
    </div>
  );
}
