import { Link } from 'react-router-dom'
import './EleccionGenero.scss'

export const EleccionGenero = ()=> {
  

  return (
    <main className='mainPrincipal'>
        <article className='contenedorVaron'>
          <Link className='linkChimuelo' to='/revelacion-poroto/Chimuelo'>
            <img className="imgVaron" src="./img/Chimuelo.png" alt="" />
            <p className='textoVaron'>Chimuelo</p>
          </Link>
        </article>
      <article className='fraseMedio'>
        <p>En el año del Dragón... ¿Qué crees que será nuestro retoño?</p>
      </article>
        <article className='contenedorMujer'>
          <Link className='linkFuria' to='/revelacion-poroto/Furia'>
            <img className="imgMujer" src="./img/Furia.png" alt="" />
            <p className='textoMujer'>Furia</p>
          </Link>
        </article>
    </main>
    
  )
}


