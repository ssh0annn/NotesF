import { useState } from 'react';
import './App.css';


const Display = (props)=>{

    console.log('Este es el contador ' + props.contador)
    return (
            <div>
         <h2 style={{
            display:'inline',
            textAlign:'center',
            color:props.color,
            width: '60px'
        }}>{props.contador}</h2>

       </div>
    )
}

const App = ()=> {
    
   
    const [counters,setCounters] = useState(
            {
            left:0,
            rigth:0,
            clickCounter:0,
            message : 'Test estados de componentes complejos'
            }
        )

      const handlerClickLeft = ()=>{

        const newCounterState ={
             ...counters,
                left: counters.left + 1,
                counterClicks: counters.clickCounter + 1
            }
        setCounters(
            newCounterState
        )
    }

    const handlerClickRigth = ()=>{

        const newCounterState ={
            ...counters,
                rigth: counters.rigth + 1,
                counterClicks: counters.clickCounter + 1
            }
        setCounters(
            newCounterState
        )
    }

   
    
    /*

     const [UpValue,UpdateUpValue] = useState(0)
    const [DownValue,UpdateDownValue] = useState(0)
        --- estos dos son lo mismo ---
    let counter = useState(0)
    const contadorValue = counter[0]
    const updateCounter = counter[1]

    ----------------------------------------------

     const isEven = UpValue % 2 === 0
    const addNumber = ()=>{
        UpdateUpValue(UpValue + 1)
    }
     const addNumberRigth = ()=>{
        UpdateDownValue(DownValue + 1)
    }
    */

  
 
    return (
    <div className='App'>
       
         <Display color = 'purple' contador = {counters.left}/>
   

        <button onClick={handlerClickLeft} style={{
           color:'white',
           display:'inline',
           verticalAlign:'middle',
           border: 'none',
           marginRight:'10px',
           padding:'2px 25px',
    
           background: 'purple',
        }}>Up</button>

        <button onClick={handlerClickRigth} style={{
           color:'white',
           display:'inline',
           verticalAlign:'middle',
           border: 'none',
           marginRight:'10px',
           padding:'2px 25px',
           background: 'black',
           
        }} >Down</button>
          <Display color = 'black' contador = {counters.rigth}/>

        <h4>
            Numero de cliks : 
        </h4>

         <Display color = 'black' contador = {counters.clickCounter}/>

            <Display color = 'black' contador = {counters.message}/>
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
