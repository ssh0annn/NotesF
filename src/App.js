
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

    const handleNewNote = (event)=>{
      console.log(event.target.value)
       setNewNote(event.target.value)
    }

    const handleSummbit = (event)=>{
      console.log('estan son las notas,actuales',notes)
        event.preventDefault()

          const noteToAddState = {
            title:newNote,
            body:newNote,
            userId:notes.length + 1
          }
          axios.post('https://jsonplaceholder.typicode.com/posts',{
              noteToAddState
          }).then(respose=>{
            const {data} = respose
            setNotes(prevMotes => prevMotes.concat(data))
          })
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
