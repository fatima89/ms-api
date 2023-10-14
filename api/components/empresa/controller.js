const storage = require('./storage')

function get_empresa( filtro_empresa ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_empresa ) )
    })
}

function add_empresa( empresa ) {
    return new Promise((resolve, reject) => {
        if (!empresa.nombre) {
            return reject('No existen datos.')
        }
        storage.add( empresa )
        resolve( empresa )  
    })
}


module.exports = {
    get_empresa,
    add_empresa,
}