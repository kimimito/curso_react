import React from 'react'
import { Link } from "react-router-dom";
import {Form} from '../components/Form/Form'

function Budget() {
    return (
      <main>
          <div className="container mt-5">
              <h3>¿Que quieres hacer?</h3>
              <Form></Form>
              <Link to="/">Volver</Link>
          </div>
      </main>
    );
  }

export default Budget