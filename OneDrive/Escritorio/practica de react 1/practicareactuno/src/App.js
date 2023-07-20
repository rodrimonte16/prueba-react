import React, {useEffect,useState} from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './components/Loader';
import Button from 'react-bootstrap/Button';
import { BsSearch } from "react-icons/bs";






function App() {
const [valor, setValor] = useState('')
const [resultados, setResultados] = useState([])
const [ocultarRandom, setOcultarRandom]=useState(true)
const [arrayRandom, setArrayRandom]=useState([])
const [pagina, setPagina]=useState(1)
const [busquedaError, setBusquedaError]=useState(0)
const [ camara, setCamara]=useState('')
const [arrayBusqueda, setArrayBusqueda]=useState([])





useEffect(() => {
  const imgRandom = async () =>{
    const API_KEY='XZsRgYD7FXMFvzUTuD7pzIPYkyEG95s0jaKaa29bWk4'
    const URL= `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=30`;
    const response = await fetch(URL)
    const data = await response.json();
    setResultados(data)
    console.log('imagenes random:', data)
  }
  imgRandom()
},[]);





const buscarResultados = async (buscarResultados) =>{
  let busqueda = valor
  if (buscarResultados!=null){
    busqueda = buscarResultados
  }
  const API_KEY= 'XZsRgYD7FXMFvzUTuD7pzIPYkyEG95s0jaKaa29bWk4'
  const URL= `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=30`;
  const response = await fetch(URL);
  const data = await response.json();
  setResultados(data.results)
  setOcultarRandom(false)
  console.log('esto nos devuelve la API en busqueda:',data.results);
  console.log('array results:',resultados.length)
  data.results.length==0?setBusquedaError(2):setBusquedaError(1)
}

useEffect(()=>{
  const sigPagina = async ()=>{
    const API_KEY= 'XZsRgYD7FXMFvzUTuD7pzIPYkyEG95s0jaKaa29bWk4'
    const URL=`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=25&page=${pagina}`;
    const response = await fetch (URL)
    const data = await response.json()
    setResultados(busquedaPrevia=>busquedaPrevia.concat(data.results))
    console.log(' datos pagina:',pagina)
    console.log(resultados)
  }
  sigPagina()
},[pagina])


const pasarId = async (idFotografia)=>{
  const API_KEY= 'XZsRgYD7FXMFvzUTuD7pzIPYkyEG95s0jaKaa29bWk4'
  const URL= `https://api.unsplash.com/search/photos/${idFotografia}?client_id=${API_KEY}`;
  const response = await fetch(URL)
  const data = await response.json()
  setCamara(data.exif)
  console.log('datos por id:',data)
}


return (

  <div className='App'>
      <div className='search-box'>
        <input className='search-box--input' placeholder='Buscar imágenes' onChange={e => setValor(e.target.value)} />

        <BsSearch onClick={()=> buscarResultados()} className='lupa'/>
      </div>

      <div className='main-content'>
      <div  className='main-content--grid'>
        {
          resultados.map((elemento) => {
            return (
              <div key={elemento}>
              <img  src={elemento.urls.regular} />
              <Button onClick={()=>pasarId(elemento.id)}>Información:</Button>
              
              <p><strong>Autor:</strong> {elemento.user.name} </p>
              <p className='Nombre'><strong>{elemento.alt_description}</strong></p>
              </div>

            )
          })
        }
      </div>
    </div>
      

    {ocultarRandom &&
      <InfiniteScroll 
      dataLength={resultados.length} 
      next={()=>setPagina(pagina+1)}
      hasMore={true}
  
      >
      
        <div className='imgRandom'>
          <div className='gridContent'>
          {resultados.map((elemento) =>{
            return(
              <div key={elemento.id} >
                <img src={elemento.urls.regular} />
                <Button onClick={()=>pasarId(elemento.id)}>Información:</Button>
                <p><strong>Ubicación:</strong> {elemento.location.city}</p>
                <p><strong>Autor:</strong> {elemento.user.name} </p>
                <p className='Nombre'><strong>{elemento.alt_description}</strong></p>

                </div>) })
          }
          
          </div> 
        </div>
        
      </InfiniteScroll>
    }

  </div>
  );
}

export default App;

