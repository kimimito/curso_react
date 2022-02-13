import React, { useState } from 'react';
import './budgets.scss';
import { Button } from 'react-bootstrap';

const Budgets = () => {

    let [budgets, setList] = useState(JSON.parse(localStorage.getItem("budgets")))

    const orderAlfa = () => {
        let sortedList = [...budgets].sort((a, b) => (a.budgetName > b.budgetName ? 1 : a.budgetName < b.budgetName ? -1 : 0));
        setList(sortedList)
    }
    const orderDate = () => {
        let sortedList = [...budgets].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
        setList(sortedList)
    }
    const orderReset = () => {
        let sortedList = JSON.parse(localStorage.getItem("budgets"));
        setList(sortedList)
    }
    

    let viewBudget = true;

    if (!budgets) {
        viewBudget = false;
        budgets = [{}];
    } else {
        viewBudget = true;
    }

    console.log('XX', budgets)

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
                    <div className="budgetButtons">
                        <Button onClick={orderAlfa} variant="info">A-Z</Button>
                        <Button onClick={orderDate} variant="info">Fecha</Button>
                        <Button onClick={orderReset} variant="info">Reset</Button>
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