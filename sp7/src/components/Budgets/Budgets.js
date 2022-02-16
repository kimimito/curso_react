import React, { useState } from 'react';
import './budgets.scss';
import { Button } from 'react-bootstrap';


const Budgets = () => {

    let [budgets, setBudgets] = useState(JSON.parse(localStorage.getItem("budgets")))

    const orderAlfa = () => {
        let orderedList = [...budgets].sort((a, b) => (a.budgetName > b.budgetName ? 1 : a.budgetName < b.budgetName ? -1 : 0));
        setBudgets(orderedList)
    }
    const orderDate = () => {
        let orderedList = [...budgets].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
        setBudgets(orderedList)
    }
    const orderReset = () => {
        let orderedList = JSON.parse(localStorage.getItem("budgets"));
        setBudgets(orderedList)
    }
    const searchItem = (e) => {
        let searchField= (e.target.value);
        let orderedList = budgets.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchField.toLowerCase())
        })
        setBudgets(orderedList)
    }


    let viewBudget = true;

    if (!budgets) {
        viewBudget = false;
        budgets = [{}];
    } else {
        viewBudget = true;
    }


    budgets.forEach((item) => {
        if (item.budgetWeb === 0) {
            item.nPag = 0;
            item.nLang = 0;
        }
        if (item.budgetSeo === 300) {
            item.budgetSeo = 1
        }
        if (item.budgetAds === 200) {
            item.budgetAds = 1
        }
    });


    return (
        <div>
            {viewBudget &&
                <div>
                    <div className="budgetButtons ">
                        <Button onClick={orderAlfa} variant="info">A-Z</Button>
                        <Button onClick={orderDate} variant="info">Fecha</Button>
                        <Button onClick={orderReset} variant="info">Reset</Button>
                        <div className="input-group">
                        <span className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </span>
                        <input type="search" onChange = {searchItem} className="form-control" placeholder="Buscar por nombre"/>
                        </div>
                    </div>
                    <div className="budgetContent">
                        {budgets.map((user, key) => (
                            <div key={key} className="budgetCard">
                                <p>Fecha: {user.date}</p>
                                <p>Cliente: {user.clientName}</p>
                                <p>Presupuesto: {user.budgetName}</p>
                                <p>Paginas Web: {user.nPag}</p>
                                <p>Nº de idiomas: {user.nLang}</p>
                                <p>Consultoria SEO: {user.budgetSeo}</p>
                                <p>Campaña Google ADS: {user.budgetAds}</p>
                                <p>Total: {user.total + '€'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );

}

export { Budgets };