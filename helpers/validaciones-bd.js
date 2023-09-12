
import Instructor from "../models/instructor.js";
import Ficha from "../models/fichas.js"

const esDocumentoValido = async(numeroDocumento)=>{
    const documento = await Instructor.findOne({numeroDocumento})
    if (documento){
        throw new Error(`El documento ${numeroDocumento} ya existe`)
    }
}

const esCorreoValido = async(correo)=>{
    const email = await Instructor.findOne({correo})
    if (email){
        throw new Error(`El correo ${correo} ya existe`)
    }
}

const existUsuarioporId = async (id) =>{
    const existeUsuario = await Instructor.findById(id)
    if(!existeUsuario){
            throw new Error(`El instructor no existe`)
    }
}

const existeFichaporId = async (id) =>{
    const existeUsuario = await Ficha.findById(id)
    if(!existeUsuario){
            throw new Error(`La ficha no existe`)
    }
}

export {esDocumentoValido, esCorreoValido, existUsuarioporId, existeFichaporId}