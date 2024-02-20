import { Link, useParams } from 'react-router-dom'
import './TemplateGenero.scss'

export const TemplateGenero = ()=>{
    
    const { genero } = useParams()
    
    
    /* cambio de imagen dinamico */
    const urlImg = `./img/${genero}.png`
    const imgCamiseta = `./img/camiseta${genero}.png`

    return(
        <main className='mainTemplate' style={{backgroundImage:`url(./img/fondo${genero}.jpg)`}}>
            <article>
            </article>
            <article className='articuloInfo' >
                <section className='seccionBienvenida'>
                    <h2 className='textoTitulo'>Bienvenido/a!</h2>
                    <p className='textoSubtitulo'>Si estas aquí es que tuviste el presentimiento de que soy {genero}.</p>
                    <img className="imgGenero" src={urlImg} alt="" />
                </section>
                <section className='seccionIndicaciones'>
                    <p className='primerIndicacion'>Mamá y Papá estan felices con mi espera y te invitan a que descubramos juntos si seré <span>Principe</span> o <span>Princesa</span>.</p>
                    <p className='segundaIndicacion'>Antes de eso te voy a dar las todas las indicaciones para que vengas a compartirlo con nosotros</p>
                </section>
                <section className='seccionDia'>
                    <h2 className='tituloDia'>¿Qué dia y horario nos juntamos?</h2>
                    <p className='textoDia'>Domingo</p>
                    <p className='icnDia'>🗓️</p>
                    <p className='textoMes'>Marzo</p>
                    <p className='textoDiaNumero'>10</p>
                    <p className='textoAno'>2024</p>
                    <p className='textoHora'>16:30 hs</p>
                    <p className='icnHora'>⏰</p>   
                </section>
                <section className='seccionDireccion'>
                    <h2 className='tituloDireccion'>¿Donde nos juntamos?</h2>
                    <Link className="linkDireccion"to="https://maps.app.goo.gl/rs5uCCP3gDve49pTA">
                        <p className='textoDireccion'>Virrey Olaguer y Feliú 2494, C1426 Buenos Aires</p>
                        <p>Haga click aqui 📍</p>
                        <section className='seccionImgDireccion'>
                            <img className="imgDireccion" src="./img/mapaBridge.png" alt="" /> 
                        </section>
                    </Link>
                </section>
                <section className='seccionRequisitos'>
                        <h2 className='tituloRequisitos'>Requisitos</h2>
                    <section className='seccionCamiseta'>
                        <img className='imgCamiseta' src={imgCamiseta}></img>
                        <p className='textoCamiseta'>Para conocer tu elección venite con una prenda/detalle que sea de color {genero==='Chimuelo'?'azul':'rosa'}.</p> 
                    </section>
                    <section className='seccionComida'>
                        <img className='imgMate' src="./img/mate.png" alt="" />
                        <p className='textoMate'>Nosotros ponemos café y té pero si queres podes traerte tu KIT DE MATE.</p>
                        <img className='imgBudin' src="./img/budin.png" alt="" />
                        <p className='textoBudin'>NO TRAIGAN NINGUN REGALITO, solo algo dulce o salado para compartir la tarde.</p>
                    </section>
                </section>
                <section className='seccionSaludo'>
                    <p className='tituloSaludo'>Te esperamos!!</p>
                </section>
                <section className='seccionReacciones'>
                    <p className='textoReacciones'>Por último compartimos las divertidas reacciones</p>
                    <video className="videoReacciones" poster="./img/fondoVideo.png" src="./video/ReaccionesPoroto.mp4" controls></video>
                </section>
            </article>
        </main>
    )
}