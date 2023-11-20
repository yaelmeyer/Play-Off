

const EleccionPjs = (props) =>{
    const cantPjs = props.cantPjs
    return(
        <form className="formulario">
            <ul>
                <li>
                    <h3>{cantPjs} pjs a elejir</h3>
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
                    <button type="submit">guardar pj</button>
                </li>
            </ul>
        </form>
    )
}

export default EleccionPjs