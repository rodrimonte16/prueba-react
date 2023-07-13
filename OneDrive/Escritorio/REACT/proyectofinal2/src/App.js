
import './App.css';

function App() {
let saludo='Bienvenidos a mi página WEB'

function hacerclick(){
  console.log('usted hizo click')
}

  return (
    <div>{saludo}
    <button onClick={hacerclick}>clickiar aquí viejita</button>
    </div>
  );
}

export default App;
