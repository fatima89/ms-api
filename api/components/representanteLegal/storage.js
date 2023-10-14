const model = require('./model')

function get_representanteLegal( filtro_representanteLegal ) {
    let filtro = {}
    if (filtro_representanteLegal) {
        filtro = { nombre: filtro_representanteLegal }
    }
    const objeto = model.find( filtro )
    return objeto
}

function add_representanteLegal( representanteLegal ) {
    const objeto = new model( representanteLegal )
    objeto.save()
}

async function update_representanteLegal( representanteLegal ) {
    const objeto = await model.findOne( {_id: representanteLegal.id} )

    if ( objeto ) {
        objeto.nombre = representanteLegal.nombre
    
        return resultado = await objeto.save()    
    } else {
        return null
    }
}

async function delete_representanteLegal( representanteLegal ) {
    return await model.deleteOne({_id: representanteLegal.id})
}

module.exports = {
    add: add_representanteLegal,
    get: get_representanteLegal,
    update: update_representanteLegal,
    delete: delete_representanteLegal,
}