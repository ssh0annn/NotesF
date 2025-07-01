
import { useState } from 'react';
import './App.css';


 const notes = [
 {
id: 1,
tittle: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
important:true
},
{
id: 2,
tittle: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
,important:true
},
{
id: 3,
tittle: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
,important:true
},
{
id: 4,
tittle: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
,important:true
}
]


const Notas = ({tittle,body})=>{
      return (
        <li>
           <h1 style={{
              fontSize:'15px'
           }}> {tittle}</h1>
           <p>{body}</p>
        </li>
      )
}



const App = ()=> {
  
  const [newNote,setNewNote] = useState('')
  const[showAll,setShowAll] = useState(true)

    const handleNewNote = (event)=>{
       setNewNote(event.target.value)
    }

    const handleSummbit = (event)=>{
        event.preventDefault()
          const noteToAddState = {
            id: notes.length + 1,
            content:newNote,
             important: Math.random() < 0.5
          }
         
          setNewNote(notes.push(noteToAddState))
          console.log('nuevo array para rederizar',...notes,noteToAddState)
          setNewNote("")
    }

    const handleShowAllClick =  ()=>{
        setShowAll(()=> !showAll)
    }

    return (
        
        <div className='App'>
          
          <h1>Notes</h1>
            <button onClick={handleShowAllClick}>{showAll ? 'Show all' : 'Show only Impotant'}</button>
            <ol>
              {notes
              .filter( (note)=>{
                  if (showAll === true) return true;
                  return note.important === true
              })
              .map(note => <Notas key={note.id} {...note}/>)}
            </ol>

            <form onSubmit={handleSummbit}>
              
              <input onChange={handleNewNote} type='text' value={newNote}>
              </input>
              
              <button>Crear una Nota</button>

            </form>  
        </div>
    )
}

export default App;
