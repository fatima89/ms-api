const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}
const empresa_datos_schema = new Schema({
    empresa: {
        type: Schema.ObjectId,
        ref: 'empresa',
    }
}, {
    timestamps: true,
})

const representanteLegal_schema = new Schema({
    ruc: req_string,
    cedula: req_string,
    nombre: req_string,
    apellido: req_string,
    email: req_string,
    domicilio: req_string,
    telefono: req_string,

    representante_empresas: [empresa_datos_schema]}, {
        timestamps: true,
})

const model = mongoose.model('representanteLegal', representanteLegal_schema)
module.exports = model
