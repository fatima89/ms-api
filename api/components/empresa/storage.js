const model = require('./model')

function get_empresa( filtroempresa ) {
        let filtro = {}
        if (filtroempresa) {
            filtro = { nombre: filtroempresa }
        }
        const objeto = model.find( filtro )
        return objeto
}

function add_empresa( empresa ) {
    const objeto = new model( empresa )
    objeto.save()
}

module.exports = {
    add: add_empresa,
    get: get_empresa,
}