import { useState } from 'react';
import './App.css';


const Display = (props)=>{

    console.log('Este es el contador ' + props.contador)
    return (
            <div>
         <h2 style={{
            display:'inline-block',
            textAlign:'center',
            color:'red',
            width: '60px'
        }}>{props.contador}</h2>

       </div>
    )
}

const App = ()=> {
    
    const [contadorValue,updateCounter] = useState(0)
    
    /*
    let counter = useState(0)
    const contadorValue = counter[0]
    const updateCounter = counter[1]
    */

    const isEven = contadorValue % 2 === 0
    const addNumber = ()=>{
        updateCounter(contadorValue + 1)
    }

    const resetNumber = ()=>{
        updateCounter(0)
    }

    const substracNumber = ()=>{
        updateCounter(contadorValue - 1)
    }

    const clickAnalizer = (prevContador)=>{
        prevContador = contadorValue + 1

        return prevContador
    }

    console.log('render')
  
    const even = isEven ? 'par' : 'no es par'
    return (
    <div className='App'>
        <h1 style={{
            marginRight: '10px'
        }}>El Valor del contador es:</h1>

         <Display contador = {2}/>
   

        <button onClick={addNumber} style={{
           color:'purple',
           display:'inline-block',
           verticalAlign:'middle'
        }}>Add</button>

        <button onClick={resetNumber} style={{
           color:'purple',
           display:'inline-block',
           verticalAlign:'middle'
        }}>Reset</button>

        <h1>
            {even}
        </h1>
    
        <h1 style={{
            fontSize:'15px'
        }}>Numero de veces clicks:</h1>

        <h2 style={{
            display:'inline-block',
            textAlign:'center',
            color:'purple',
            width: '60px'
        }}>{clickAnalizer}</h2>

    </div>
    )
}

  /*
        <button onClick={substracNumber} style={{
           color:'purple',
           display:'inline-block',
           verticalAlign:'middle'
        }}>Substract</button>

  */

export default App;
