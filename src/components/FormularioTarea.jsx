import React from "react";
import {Form, Button} from "react-bootstrap"
import ListaTarea from "./ListaTarea"

const Formulario = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Ingrese una tarea" />   
          {/* from control es el imput */}
          <Button variant="primary" type="submit" >
          Enviar
        </Button>
        </Form.Group>
      </Form>
      <ListaTarea></ListaTarea>
    </div>
  );
};

export default Formulario;
