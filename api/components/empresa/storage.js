const model = require('./model')

function get_empresa( filtroempresa ) {
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtroempresa) {
            filtro = { nombre: filtroempresa }
        }
        model.find( filtro )
            .populate('representanteLegal')
            .exec( (error, data) => {
                lista = []
                for (elemento of data) {
                    lista.push( {id:elemento._id, empresa:elemento.ruc, empresa:elemento.nombre, empresa:elemento.domicilio, empresa:elemento.telefono, representanteLegal:elemento.representanteLegal.nombre} )
                }
                if (error)
                    reject(error)
                else 
                    resolve(lista)
            })
    })
}

function add_empresa( empresa ) {
    const objeto = new model( empresa )
    objeto.save()
}

async function update_empresa( empresa ) {
    const objeto = await model.findOne( {_id: empresa.id} )

    if ( objeto ) {
        objeto.nombre = empresa.nombre
    
        return resultado = await objeto.save()    
    } else {
        return null
    }
}

async function delete_empresa( empresa ) {
    return await model.deleteOne({_id: empresa.id})
}

module.exports = {
    add: add_empresa,
    get: get_empresa,
    update: update_empresa,
    delete: delete_empresa,
}