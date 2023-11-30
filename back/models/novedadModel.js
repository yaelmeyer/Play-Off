let pool = require('../db/conectorDB')

const getNovedadByIdDB = async(id) =>{
    const query = 'select * from novedad where id = ?'

    const novedad = await pool.query(query, [id])

    return novedad[0]
}

const getNovedadesDB = async() =>{

    const query = 'select * from novedad'

    const novedades = await pool.query(query)

    return  novedades
}

const postNovedadDB = async(titulo, descripcion) =>{
    const query = `insert into novedad (titulo, descripcion) values (?, ?) `
    console.log("holaa: "+titulo+" "+descripcion)
    await pool.query(query, [titulo, descripcion])
}

const deleteNovedadDB = async(id) =>{
    const query = 'delete from novedad where novedad.id = ?'
    
    await pool.query(query, [id])
}

const updateNovedadDB = async(id, titulo, descripcion) =>{
    const query = 'update novedad set titulo = ?, descripcion = ? where id = ?'

    await pool.query(query, [titulo, descripcion, id])
}

module.exports = {
    getNovedadByIdDB,
    getNovedadesDB,
    postNovedadDB,
    deleteNovedadDB,
    updateNovedadDB
}