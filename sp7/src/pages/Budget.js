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
              <div className="col-md-12 col-lg-4">
                  <h3 className="mb-4">¿Que quieres hacer?</h3>
                  <Form></Form>
              </div>
              <div className="col-md-12 col-lg-8">
                  <h3 className="mb-4">Tus presupuestos</h3>
                  <Budgets></Budgets>
              </div>
            </div>
          </div>
      </main>
    );
  }

export default Budget