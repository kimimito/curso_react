import React, { useEffect, useState } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { Panel } from '../Panel/Panel';
import { Input } from '../Input/Input';
import { Button } from 'react-bootstrap';
import './form.scss'


const Form = () => {

    let GET_parameters = {};

    if (window.location.search) {
        var splitts = window.location.search.substring(1).split('&');
        for (var i = 0; i < splitts.length; i++) {
            var key_value_pair = splitts[i].split('=');
            if (!key_value_pair[0]) continue;
            GET_parameters[key_value_pair[0]] = key_value_pair[1] || true;
        }
    }

    let urlParams = GET_parameters;

    const [total, setTotal] = useState(0);

    const [budgetName, setBudgetName] = useState('');
    const [clientName, setClientName] = useState('');

    const [data, setData] = useState({
        budgetWeb: 0,
        budgetSeo: 0,
        budgetAds: 0,
        nPag: 1,
        nLang: 1
    })

    const [showComponent, setShowComponent] = useState(false);

    const setBuget = ({ name, value, checked }) => {

        value = parseInt(value);

        if (!checked) {
            setData({
                ...data,
                [name]: value,
            })
        } else {
            setData({
                ...data,
                [name]: 0,
            })
        }

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
        if (name === 'clientName') {
            setClientName(value)
        } else {
            setBudgetName(value)
        }
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
        const budget = [{ ...data, total, budgetName, clientName, date }];
        
        let budgets = JSON.parse(localStorage.getItem("budgets"));

        if (!budgets) {
            budgets = [];
        }
        if(total !== 0){
            budgets.push(...budget);
            localStorage.setItem("budgets", JSON.stringify(budgets));
        }

        window.history.pushState(null, null, '?');
        window.location.reload(true);

    }

    useEffect(() => {

        if(urlParams){
            console.log('urlParams',urlParams)
            setData({
                ...data, 
            })
            //setTotal(urlParams.total)
        }

    }, []);


    if(total !== 0 || !urlParams){
        const paramsUrl = Object.entries({budgetName, clientName, ...data, total}).reduce((acum, actual, index) => (`${acum}${index === 0 ? '?' : '&'}${actual[0]}=${actual[1]}`), '');
        const newUrl = paramsUrl;       
        window.history.pushState(null, null, newUrl);
    } 

    return (
        <div>
            <Checkbox
                label='Una pagina Web (500€)'
                name="budgetWeb"
                value='500'
                defaultChecked={urlParams.budgetWeb}
                onChange={setBuget}
            />
            {showComponent &&
                <div className="styledPanel">
                    <Panel label='Numero de paginas' value={urlParams.nPag || data.nPag} name="nPag" onChange={setPages} className="mb-4" />
                    <Panel label='Numero de idiomas' value={urlParams.nLang || data.nLang} name="nLang" onChange={setPages} />
                </div>
            }
            <Checkbox
                label='Una consultoria SEO (300€)'
                name="budgetSeo"
                value='300'
                defaultChecked={urlParams.budgetSeo}
                onChange={setBuget}
            />
            <Checkbox
                label='Una campaña de Google ADS (200€)'
                name="budgetAds"
                value='200'
                defaultChecked={urlParams.budgetAds}
                onChange={setBuget}
            />
            <div className="mt-2">
                <p><b>Total: {urlParams?.total || total}</b></p>
            </div>
            <Input
                label='Introduce un nombre de presupueto'
                name="budgetName"
                defaultValue={urlParams?.budgetName || ""}
                onChange={setName}
            />
            <Input
                label='Introduce tu nombre'
                name="clientName"
                defaultValue={urlParams?.clientName || ""}
                onChange={setName}
            />
            <div className="mb-4">
                <Button variant="outline-info" onClick={saveBudget}><i>Guardar</i></Button>
            </div>
        </div>
    )
}

export { Form };

