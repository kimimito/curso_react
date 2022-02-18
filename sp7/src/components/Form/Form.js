import React, { useEffect, useState } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { Panel } from '../Panel/Panel';
import { Input } from '../Input/Input';
import { Button } from 'react-bootstrap';
import './form.scss'
import { useLocation } from 'react-router-dom';


const Form = () => {

    const location = useLocation();
    const searchParams = location.search;


    const [total, setTotal] = useState(0);

    const [data, setData] = useState({
        budgetName: '',
        clientName: '',
        budgetWeb: 0,
        budgetSeo: 0,
        budgetAds: 0,
        nPag: 1,
        nLang: 1
    })

    const [showComponent, setShowComponent] = useState(false);

    const setBudget = (e) => {
        const { name, value } = e.target;

        const setValue = data[name] ? false : parseInt(value);
        setData({
            ...data,
            [name]: setValue,
        })

        if (name === 'budgetWeb') {
            setShowComponent(!showComponent);
        }

    }

    const setPages = (name, value) => {
        value = parseInt(value);
        setData({
            ...data,
            [name]: value
        })
    }

    const setName = (name, value) => {
        setData({
            ...data,
            [name]: value
        })
    }

    useEffect(() => {

        const { budgetWeb, budgetSeo, budgetAds, nPag, nLang } = data;

        let totalBudgetWeb = budgetWeb;

        if ((nPag >= 2 || nLang >= 2) && budgetWeb !== 0) {
            totalBudgetWeb = budgetWeb + nPag * nLang * 30;
        }
        const total = totalBudgetWeb + budgetSeo + budgetAds;

        setTotal(total)

    }, [data]);


    const saveBudget = () => {
        const date = new Date().toLocaleString("en-US");
        const budget = [{ ...data, total, date }];

        let budgets = JSON.parse(localStorage.getItem("budgets"));

        if (!budgets) {
            budgets = [];
        }
        if (total !== 0) {
            budgets.push(...budget);
            localStorage.setItem("budgets", JSON.stringify(budgets));
        }

        window.history.pushState(null, null, '?');
        window.location.reload(true);

    }

    useEffect(() => {
        if (searchParams) {
            const urlParams = new URLSearchParams(searchParams);
            const dataParams = {};

            for (var [key, value] of urlParams.entries()) {

                if (key !== 'total') {
                    if (key === 'budgetName' || key === 'clientName') {
                        if(key === 'budgetName') setShowComponent(true);
                        dataParams[key] = value;
                    } else {
                        dataParams[key] = parseInt(value)
                    }
                }
            }
            setData({
                ...dataParams,
            })
        }

    }, []);

    console.log("data", data)

    if (total !== 0 || !data) {
        const paramsUrl = Object.entries({ ...data, total }).reduce((acum, actual, index) => (`${acum}${index === 0 ? '?' : '&'}${actual[0]}=${actual[1]}`), '');
        const newUrl = paramsUrl;
        window.history.pushState(null, null, newUrl);
    }

    return (
        <div>
            <Checkbox
                label='Una pagina Web (500€)'
                name="budgetWeb"
                value='500'
                checked={!!data?.budgetWeb}
                onChange={setBudget}
            />
            {showComponent &&
                <div className="styledPanel">
                    <Panel label='Numero de paginas' value={data.nPag} name="nPag" onChange={setPages} className="mb-4" />
                    <Panel label='Numero de idiomas' value={data.nLang} name="nLang" onChange={setPages} />
                </div>
            }
            <Checkbox
                label='Una consultoria SEO (300€)'
                name="budgetSeo"
                value='300'
                checked={!!data?.budgetSeo}
                onChange={setBudget}
            />
            <Checkbox
                label='Una campaña de Google ADS (200€)'
                name="budgetAds"
                value='200'
                checked={!!data?.budgetAds}
                onChange={setBudget}
            />
            <div className="mt-2">
                <p><b>Total: {data?.total || total}</b></p>
            </div>
            <Input
                label='Introduce un nombre de presupueto'
                name="budgetName"
                value={data?.budgetName || ""}
                onChange={setName}
            />
            <Input
                label='Introduce tu nombre'
                name="clientName"
                value={data?.clientName || ""}
                onChange={setName}
            />
            <div className="mb-4">
                <Button variant="outline-info" onClick={saveBudget}><i>Guardar</i></Button>
            </div>
        </div>
    )
}

export { Form };

