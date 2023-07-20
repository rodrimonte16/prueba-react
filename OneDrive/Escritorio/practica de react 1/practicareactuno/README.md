## Bienvenido al repositorio oficial de Rodrigo Montenegro
**Sobre mí:**
*Mi nombre es Rodrigo Montenegro, además de ser docente de Economía en una escuela secundaria y bibliotecario de un instituto terciario, estudio (lo que me trajo hasta aquí) una diplomatura de programador full stack en la UTN.BA. Aunque todavía mis conocimientos sobre programación son escasos, ojalá esta sea la presentación de uno de los primeros proyectos que realice y el cual quiero compartir con ustedes.
**muchas gracias***

#### INTRODUCCIÓN AL PROYECTO:
- El proyecto hoy presentado consiste en una galería de imágenes realizadas con **REACT JS**. Esta galería además tenía que aplicar los datos de la API de **UNSPLASH** ([Aquí](https://unsplash.com/ "Aquí")).Sumado a esto, también debíamos utilizar un **framework**, en mi caso fue ***BOOTSTRAP.***





## Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")


- **Les dejo una pequeña parte del APP.JS de este proyecto:**

```javascript
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

Sin mucho más para aportar, les dejo el **LINK** de mi repositorio de **github.**

### SALUDOS