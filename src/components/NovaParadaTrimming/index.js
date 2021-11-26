import React, { useState } from "react";
import api from "../../service/api";

import { Button, Modal, FormControl, InputGroup } from "react-bootstrap";

export default function BotaoParadasTrimming() {
  const [show, setShow] = useState(false);

  const [pier, setPier] = useState("");
  const [horarioParada, setHorarioParada] = useState("");
  const [horarioManobra, setHorarioManobra] = useState("");
  const [tipoManobra, setTipoManobra] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit() {
    const data = {
      pier: pier,
      horario_parada: horarioParada,
      horario_manobra: horarioManobra,
      tipo_manobra: tipoManobra,
      responsavel: responsavel,
    };

    try {
      await api.post("/paradastrimming", data);
      alert("Parada cadastrada com sucesso!");
      handleClose();
    } catch (err) {
      alert("Erro ao cadastrar Parada!");
    }
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ marginTop: "10px" }}
      >
        Inserir nova parada Trimming
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Novo registro de Parada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Pier"
              onChange={(event) => {
                setPier(event.target.value);
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Horario de Parada"
              onChange={(event) => {
                setHorarioParada(event.target.value);
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Horario da Manobra"
              onChange={(event) => {
                setHorarioManobra(event.target.value);
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Tipo de manobra"
              onChange={(event) => {
                setTipoManobra(event.target.value);
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Responsável"
              onChange={(event) => {
                setResponsavel(event.target.value);
              }}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
