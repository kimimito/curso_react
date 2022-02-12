import React from 'react';
import './budgets.css'

const Budgets = () => {

    let budgets = JSON.parse(localStorage.getItem("budgets"));

    if (!budgets) {
        budgets = [{}];
    }

    budgets.forEach((item) => {
        if(item.budgetWeb === 0){
            item.nPag = 0;
            item.nLang = 0;
        }
        if(item.budgetSeo === 300){
            item.budgetSeo = 1
        }
        if(item.budgetAds === 200){
            item.budgetAds = 1
        } 
    });  

    return (
        <div>
            {budgets.map((user, key) => (
                <div key={key} className="budgetCard">
                    <p>Fecha: {user.date}</p>
                    <p>Nombre del presupuesto: {user.budgetName}</p>
                    <p>Nombre del cliente: {user.clientName}</p>
                    <p>Paginas Web: {user.nPag}</p>
                    <p>Nº de idiomas: {user.nLang}</p>
                    <p>Consultoria SEO: {user.budgetSeo}</p>
                    <p>Campaña Google ADS: {user.budgetAds}</p>
                    <p>Total: {user.total}</p>
                </div>
            ))}
        </div>
    );

}

export { Budgets };