const empleado = require('../components/empleado/interface')
const pais = require('../components/pais/interface')
const ciudad = require('../components/ciudad/interface')
const cliente = require('../components/cliente/interface')
const producto = require('../components/producto/interface')
const factura = require('../components/factura/interface')
const representanteLegal = require('../components/representanteLegal/interface')
const empresa = require('../components/empresa/interface')

const routes = function(server) {
    server.use('/empleado', empleado)
    server.use('/pais', pais)
    server.use('/ciudad', ciudad)
    server.use('/representanteLegal', representanteLegal)
    server.use('/empresa', empresa)
    server.use('/cliente', cliente)
    server.use('/producto', producto)
    server.use('/factura', factura)
}

module.exports = routes