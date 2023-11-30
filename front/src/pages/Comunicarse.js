import axios from 'axios'
import {useState} from 'react'
import '../styles/components/formularioJuego.css'

const Comunicarse = () =>{

    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }

    const [sending, setSending] = useState(false)
    const [msg, setMsg] = useState('')
    const[formData, setFormData] = useState(initialForm)

    const handleChange = e =>{
        const {name, value} = e.target
        setFormData(oldData =>({
            ...oldData,
            [name]:value
        }))
    }

    const handleSubmit = async e =>{
        console.log(': ')
        console.log('formData: '+ formData)
        e.preventDefault()
        setMsg('')
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData)
        setSending(false)
        setMsg(response.data.message)
        if(response.data.error === false){
            setFormData(initialForm)
        }
    }

    return(
        <>
        <form action='/contacto' method='post' onSubmit={handleSubmit} className="formulario">
            <ul>
                <li>
                    <label htmlFor="nombre">nombre</label>
                    <input type="text" name="nombre"  onChange={handleChange}/>
                </li> 
                 <li>
                    <label htmlFor="email">email</label>
                    <input type="text" name="email"  onChange={handleChange}/>
                </li>
                <li>
                    <label htmlFor="telefono">telefono</label>
                    <input type="text" name="telefono"  onChange={handleChange}/>
                </li>
                <li>
                    <label htmlFor="mensaje">mensaje</label>
                    <textarea name="mensaje"  onChange={handleChange}></textarea>
                </li>
                <button type="submit">enviar</button>
            </ul>
         </form>
         {sending? <p>Enviando...</p>:null}
         {msg? <p>{msg}</p>:null}

         </>
    )
}

export default Comunicarse