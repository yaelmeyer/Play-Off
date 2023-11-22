import Duelo from './Duelo'

const Eliminatoria = (props) =>{
    const url1 = 'img/carrucel/pj6.png'
    const url2 = 'img/carrucel/pj2.png'
    const pjs = [url1, url2] 

    return(
        <>
            <Duelo  pjs= {pjs}>
            </Duelo>
        </>
    )
}

export default Eliminatoria