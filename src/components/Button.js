import React,{useState} from 'react';

export const Button = ({label}) => {
    let [nome,setNome] = useState(label)

    const alertCiao = () =>{
        setNome((prevState)=> prevState+'O')
        alert(nome)
    }

    return(
        <button class="ciao" onClick={()=> setNome((prevState)=> prevState+'O')} >
            {nome}
        </button>
    )
}

/***
 * 
 * return [sadsa,dsada()]
 * 
 * 
 */