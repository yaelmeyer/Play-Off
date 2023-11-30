import axios from 'axios'
import { useState, useEffect } from "react"

const Novedades = (props) =>{
    const [loading, setLoading] = useState(false)
    const[novedades, setNovedades] = useState([])

    useEffect(()=>{
        const cargarNovedades = async() =>{
            setLoading(true)
            const response = await axios.get('http://localhost:3000/api/novedades')
            console.log('novedades: '+ response.data[0].imagen)
            setNovedades(response.data)
            setLoading(false)
        }

        cargarNovedades()
    }, [])

    return(
        <div>
            {/* {loading ? (
                
                <p>Cargando...</p>
                ): ( */}
                    {novedades.map((novedad,index) =>(
                    <div className="explicacion" key={index}>
                        <div className="novedad">
                            <div className="tituloNovedad">
                                <span>  {novedad.titulo} </span>
                            </div>
                            <div className="descripcion">
                                <span>  {novedad.descripcion} </span>
                            </div>
                            <div className="imagenes">
                                <img src={novedad.imagen}></img>
                            </div>                     
                        </div>
                        <br/>
                    </div>
                ))}    
            {/* )}               */}
        </div>    
    )
}

export default Novedades