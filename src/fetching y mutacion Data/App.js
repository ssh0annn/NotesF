
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';



const Notas = ({title,body})=>{
      return (
        <li>
           <h1 style={{
              fontSize:'15px'
           }}> {title}</h1>
           <p>{body}</p>
        </li>
      )
}

const App = (props)=> {
  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('')
  const [loading,setLoading] = useState(false)

  
   
  useEffect(() => {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => 
          {
            const {data} = response;
            setNotes(data) // Axios como opcion y mas ventajas que fetch 
          }
        )
  }, 2000)
}, [newNote]);

/*
      useEffect(() => {
  setLoading(true);

  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setNotes(json);
        setLoading(false);
      });
  }, 2000);
}, [newNote]); // ✅ Este [] va aquí
  //importante se renderiza primero el componente aunque el fetch no haiga llegado

*/

    const handleNewNote = (event)=>{
       setNewNote(event.target.value)
    }

    const handleSummbit = (event)=>{
        event.preventDefault()
          const noteToAddState = {
            id:notes.length + 1,
            content:newNote,
            body:newNote
          }
         
          setNotes(notes)
          console.log('nuevo array para rederizar',...props.notes,noteToAddState)
          setNewNote("")
    }

 
      
    return (

        <div className='App'>
          <h1 style={{
            marginBottom:'40px',
          
          
          }}>Notes📚</h1>
          
          <h2 
            style={{
              color:'gray',
              padding: '5px 5px',
              fontSize:'12px'
            }}
          >{loading ? 'Loading ... ⌛️' : ''}</h2>
            <ol>
              {notes
              .map(note => <Notas key={note.id}  {...note}/>)}
            </ol>

            

        </div>
    )
}

export default App;
