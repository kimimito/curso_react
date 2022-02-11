import React, {useState} from 'react';
import {Checkbox} from '../Checkbox/Checkbox';
import {Panel} from '../Panel/Panel';
import {StyledPanel} from './style'

const Form = () => {
    
    const [data, setData] = useState({
        budgetWeb: 0,
        budgetSeo: 0,
        budgetAds: 0,
        nPag: 1,
        nLang: 1,
        total: 0
    })

    const [showComponent, setShowComponent] = useState(false);

    const setBuget = ({name, value, checked}) => {  

        value = parseInt(value);
        
        if(!checked){
            setData({
                ...data,
                [name] : value,
            })
        } else {
            setData({
                ...data,
                [name] : 0,
            })
        }
        
        if(name === 'budgetWeb'){
            setShowComponent(!showComponent);
            
        }

    }

    const setPages = (name, value) =>{
        value = parseInt(value);
        setData({
            ...data,
            [name] : value
        })
        console.log('data2',data)    
    }
    
    console.log('data',data)

    localStorage.setItem("data", JSON.stringify(data));
    console.log('localStorage',JSON.parse(localStorage.getItem("data")));   

    return (
        <div>
            <Checkbox
                label='Una pagina Web (500€)'
                name="budgetWeb"
                value= '500'
                onChange={setBuget}
            />
            {showComponent && 
                <StyledPanel>
                    <Panel label='Numero de paginas' value={data.nPag} name="nPag" onChange={setPages} className="mb-4" />
                    <Panel label='Numero de idiomas' value={data.nLang} name="nLang" onChange={setPages} />
                </StyledPanel>
            }
            <Checkbox
                label='Una consultoria SEO (300€)'
                name="budgetSeo"
                value= '300'
                onChange={setBuget}
            />
            <Checkbox
                label='Una campaña de Google ADS (200€)'
                name="budgetAds"
                value= '200'
                onChange={setBuget}
            />
            <div className="mt-2">
                <p><b>Total: {data.total}</b></p>
            </div>
        </div>
    )
}

export {Form};

