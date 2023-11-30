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

const postNovedadDB = async(titulo, descripcion, img_id) =>{
    const query = `insert into novedad (titulo, descripcion, img) values (?, ?, ?) `
    console.log("a guardar: "+titulo+" "+descripcion+" "+ img_id)
    await pool.query(query, [titulo, descripcion, img_id])
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