import { useEffect, useState, setState } from "react"
import { useParams } from "react-router-dom"


const EleccionPjs = (props) =>{
    //props
    const setEmpezar = props.setEmpezar
    const setCargarPjs = props.setCargarPjs
    const setPjs = props.setPjs
    const pjs = props.pjs
    const cantPjs = props.cantPjs

    //variables
    const [imagen, setImagen] = useState([])
    const [imagenes, setImagenes] = useState([])
    const [cantPjsElejidos, setCantPjsElejidos] = useState(0)

    const [pjsFaltantes, setPjsFaltantes] = useState(cantPjs)
    

    const empezarJuego = () =>{
        console.log(cantPjsElejidos)
        if(cantPjsElejidos == cantPjs){
            setEmpezar(true)
            setCargarPjs(false)
        }

    }

    const cargarImg = (event) =>{
        if(cantPjsElejidos < cantPjs){
            if(event && event.currentTarget && event.currentTarget.files && event.currentTarget.files[0]){
                const file = event.currentTarget.files[0]
                const url = URL.createObjectURL(file)
                setImagen(url)
                imagenes.push(url)
                setImagenes(imagenes)
                console.log(imagenes)

                guardarImg(url)
            }
        }   
        if(cantPjsElejidos == cantPjs){
            console.log('se invalida')
            document.getElementById('img').setAttribute('disabled', true)
        }   
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

    const guardarImg = (imagen) =>{       
        pjs.push(imagen)
        console.log(pjs)
        setPjs(pjs)
        setCantPjsElejidos(cantPjsElejidos+1)
    }

    return(
        <div className="formulario">
            <ul>
                <li>
                    <h3>{cantPjs} pjs a elejir</h3>
                </li>
                <li>
                    <h3>{cantPjs - cantPjsElejidos} pjs faltantes</h3>
                </li>
                {/* <li>
                    <label htmlFor="nombre">nombre</label>
                    <input type="text" id="nombre"/>
                </li> */}
                {/* <li>
                    <label htmlFor="imagen">cargar imagen</label>
                    <input type="text" id="urlImagen"/>
                </li> */}
                <li>
                    <label htmlFor="img">cargar imagen</label>
                    <input id="img" type="file" accept="image/*" onChange={cargarImg}/>
                </li>
                <li>
                    <button onClick={empezarJuego}>empezar eliminatoria</button>
                </li>
            </ul>
            {/* <div className="imagenes">
                <img src={imagen} alt="img"/>
            </div> */}
                {imagenes.map((imagen, index)=>(             
                        <div className="imagenes" key={index}>    
                            {/* <button onClick={()=>eliminarImg(index)}>X</button>    */}
                            {/* <button onClick={()=>guardarImg(imagen,index)}>agregar</button>                      */}
                            <img src={imagen} alt="img"/>
                        </div>
                ))}
        </div>
    )
}

export default EleccionPjs