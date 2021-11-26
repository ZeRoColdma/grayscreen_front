import React, { useEffect, useState } from "react";
import api from "./service/api";
import "./App.css";

export default function MainPage() {
  const [dataParadas, setDataParadas] = useState([]);
  const [dataParadasTrimming, setDataParadasTrimming] = useState([]);

  async function handleParadas() {
    const data = await api.get("/paradas");
    setDataParadas(data.data);

    const dataTrimming = await api.get("/paradastrimming");
    setDataParadasTrimming(dataTrimming.data);
  }

  useEffect(async () => {
    await handleParadas();
  }, []);

  console.log(dataParadas);

  return (
    <>
      <div className="App">
        <div className="main-screen">
          {dataParadas.map((data) => {
            return (
              <div
                className="card"
                style={{ width: "50rem", height: "30rem", margin: "20px" }}
                key={data._id}
              >
                <div className="card-body">
                  <h5 className="card-title">Informe de Paradas Porto Norte</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Equipamento: {data.equipamento}
                  </h6>
                  <h6>
                    Tipo: <p>{data.tipo}</p>
                  </h6>
                  <h6>
                    Horario da Parada: <p>{data.horario_parada}</p>
                  </h6>
                  <h6>
                    Descrição: <p>{data.descricao}</p>
                  </h6>
                  <h6>
                    Previsão de Retorno: <p>{data.previsao_retorno}</p>
                  </h6>
                  <h6>
                    Acionamento: <p>{data.acionamento}</p>
                  </h6>
                  <h6>
                    Impacto: <p>{data.impacto}</p>
                  </h6>
                </div>
              </div>
            );
          })}

          {dataParadasTrimming.map((data) => {
            return (
              <div
                className="card"
                style={{ width: "50rem", height: "30rem", margin: "20px" }}
                key={data._id}
              >
                <div className="card-body">
                  <h5 className="card-title">Informe Parada para Trimming</h5>
                  <h6>
                    Pier: <p>{data.pier}</p>
                  </h6>
                  <h6 className="card-text">
                    Horário da parada: <p>{data.horario_parada}</p>
                  </h6>
                  <h6>
                    Horário da Manobra: <p>{data.horario_manobra}</p>
                  </h6>
                  <h6>
                    Tipo da Manobra: <p>{data.tipo_manobra}</p>
                  </h6>
                  <h6>
                    Responsável: <p>{data.responsavel}</p>
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
