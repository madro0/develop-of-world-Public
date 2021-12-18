import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    const handleInputChangeSelect = (targe) => {
        setValues({
            ...values,
            [targe.name]: targe.value
        })
    }
    const inputChange = ( target ) => {
        let values={};
        for(let i in target){
            values[i]= target[i]
        }
        setValues(values);
    }


    return [ values, handleInputChange, handleInputChangeSelect, inputChange, reset ];

}