import React, { useState } from "react";
import api from "../../service/api";

import { Button, Modal, FormControl, InputGroup } from "react-bootstrap";

export default function BotaoParadas() {
  const [show, setShow] = useState(false);

  const [equipamento, setEquipamento] = useState("");
  const [tipo, setTipo] = useState("");
  const [horarioParada, setHorarioParadao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [previsaoRetorno, setPrevisaoRetorno] = useState("");
  const [acionamento, setAcionamento] = useState("");
  const [impacto, setImpacto] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit() {
    const data = {
      equipamento: equipamento,
      tipo: tipo,
      horario_parada: horarioParada,
      descricao: descricao,
      previsao_retorno: previsaoRetorno,
      acionamento: acionamento,
      impacto: impacto,
    };

    try {
      await api.post("/paradas", data);
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
        Inserir nova parada para manutenção
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Novo registro de Parada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Equipamento"
              onChange={(event) => {
                setEquipamento(event.target.value);
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Tipo"
              onChange={(event) => {
                setTipo(event.target.value);
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Horario de Parada"
              onChange={(event) => {
                setHorarioParadao(event.target.value);
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Descrição"
              onChange={(event) => {
                setDescricao(event.target.value);
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Previsão de Retorno"
              onChange={(event) => {
                setPrevisaoRetorno(event.target.value);
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Acionamento"
              onChange={(event) => {
                setAcionamento(event.target.value);
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Impacto"
              onChange={(event) => {
                setImpacto(event.target.value);
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
