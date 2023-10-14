const storage = require('./storage')

function get_representanteLegal( filtro_representanteLegal ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_representanteLegal ) )
    })
}

function add_representanteLegal( representanteLegal ) {
    return new Promise((resolve, reject) => {
        if (!representanteLegal.nombre) {
            return reject('No existen datos.')
        }
        storage.add( representanteLegal )
        resolve( representanteLegal )        
    })
}

function update_representanteLegal( representanteLegal ) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update( representanteLegal )
        if (resultado) {
            return resolve( representanteLegal )
        } else {
            return reject('No existe el Representante Legal.')
        }
    })
}

function delete_representanteLegal( representanteLegal ) {
    return new Promise((resolve, reject) => {
        storage.delete( representanteLegal )
        resolve( representanteLegal )
    })
}

module.exports = {
    get_representanteLegal,
    add_representanteLegal,
    update_representanteLegal,
    delete_representanteLegal,
}