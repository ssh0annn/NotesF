
import './App.css';

const Message = (props)=>{
    console.log(props.Message)
    return (
        <h1 style = {{
            color:props.color,
            fontSize:props.size,
            fontFamily:props.fontFamily
            }}>
            {props.Message}
        </h1>
    );
} 


    const textOne = "My First Own Component "
    const textTwo = 'Mastering JavaScript'
    const color = 'blue'
    const size = '50px'
    const fontFamily = 'Arial'

const App = ()=> {
  

    return (
    <div className='App'>
        <Message color={color} Message = {textOne} size = {size} fontFamily = {fontFamily}/>
         <Message color='yellow' Message = {textTwo} size = '30px' fontFamily = {fontFamily}/>

    </div>
    )
}

  

export default App;
