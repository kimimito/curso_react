import React from 'react'
import { Link } from "react-router-dom";
import {Form} from '../components/Form/Form'
import {Budgets} from '../components/Budgets/Budgets'

function Budget() {
  
    return (
      <main>
          <Link to="/">Volver</Link>
          <div className="container mt-4">
          <div className="row">
              <div className="col">
                  <h3>¿Que quieres hacer?</h3>
                  <Form></Form>
              </div>
              <div className="col">
                  <h3>Tus presupuestos</h3>
                  <Budgets></Budgets>
              </div>
            </div>
          </div>
      </main>
    );
  }

export default Budget