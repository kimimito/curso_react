import React, {useState} from 'react';
import {Checkbox} from '../Checkbox/Checkbox';

const Form = () => {

    const [total, setTotal] = useState(0);
    
    const [data, setData] = useState({
        budgetWeb: 0,
        budgetSeo: 0,
        budgetAds: 0
    })

    const onChange = ({name, value, checked}) => {  

        value = parseInt(value);
        let budget = 0;
        
        if(!checked){
            budget = total + value;
            setData({
                ...data,
                [name] : value
            })
        } else {
            budget = total - value;
            setData({
                ...data,
                [name] : 0
            })
        }
        setTotal(budget);
    }

    console.log('data',data)

    return (
        <div>
            <p>¿Que quieres hacer?</p>
            <Checkbox
                label='Una pagina Web (500€)'
                name="budgetWeb"
                value= '500'
                onChange={onChange}
            />
            <Checkbox
                label='Una consultoria SEO (300€)'
                name="budgetSeo"
                value= '300'
                onChange={onChange}
            />
            <Checkbox
                label='Una campaña de Google ADS (200€)'
                name="budgetAds"
                value= '200'
                onChange={onChange}
            />
            <div className="mt-2">
                <p><b>Total: {total}</b></p>
            </div>
        </div>
    )
}

export {Form};

