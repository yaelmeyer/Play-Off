import { useEffect, useState, setState } from "react"
import { useParams } from "react-router-dom"


const EleccionPjs = (props) =>{
    const setEmpezar = props.setEmpezar

    const [imagen, setImagen] = useState([])
    const [imagenes, setImagenes] = useState([])
    

    const empezarJuego = () =>{

    }

    const cargarImg = (event) =>{
        const file = event.currentTarget.files[0]
        const url = URL.createObjectURL(file)
        setImagen(url)
        imagenes.push(url)
        setImagenes(imagenes)
        console.log(imagenes)
    }

    const eliminarImg = (index) =>{
        let newImg = imagenes
        newImg.splice(index,1)

        setImagenes(newImg)
        console.log(newImg)
    }
    
    const deleteImg = (index) => {
        console.log(index)
        const newImgs = imagenes.filter(function (element) {
          return element.index != index;
        });
        console.log(newImgs);
        setImagenes(newImgs);
    }

    return(
        <div className="formulario">
            <ul>
                <li>
                    <h3> pjs a elejir</h3>
                </li>
                <li>
                    <label htmlFor="nombre">nombre</label>
                    <input type="text" id="nombre"/>
                </li>
                <li>
                    <label htmlFor="imagen">cargar imagen</label>
                    <input type="text" id="urlImagen"/>
                </li>
                <li>
                    <input id="img" type="file" accept="image/*" onChange={cargarImg}/>
                </li>
                <li>
                    <button type="submit">guardar pj</button>
                </li>
            </ul>
            {/* <div className="imagenes">
                <img src={imagen} alt="img"/>
            </div> */}
                {imagenes.map((imagen, index)=>(             
                        <div className="imagenes" key={index}>    
                            <button onClick={()=>eliminarImg(index)}>X</button>                    
                            <img src={imagen} alt="img"/>
                        </div>
                ))}
        </div>
    )
}

export default EleccionPjs