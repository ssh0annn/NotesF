
import './App.css';


    const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]


const Notas = ({id,content})=>{
      return (
        <li>
           <h1 style={{
              fontSize:'15px'
           }}> {content}</h1>
        </li>
      )
}

const App = ()=> {
    
    if(typeof notes === "undefined"){
        return 'No hay notas que mostrar'
    }

    if(notes.length === 0){
        return 'No tenemos Notas'
    }

    return (
        
        <div className='App'>
            <ol>
              {notes.map(note => <Notas key={note.id} {...note}/>)}
            </ol>
        </div>
    )
}

export default App;
