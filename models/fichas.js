import {Schema, model} from "mongoose"

//creamos el esquema que son los datos de como queremos que se vean o se registre en la base datos 

const InstructorSchema = Schema({
    numeroFicha:{
        type:String,
        required:[true, "El numero de ficha es obligatorio"]
    },
    programa:{
        type:String,
        required:[true, "El programa es obligatorio"]
    },
    instructorLider:{
        type:Schema.Types.ObjectId,
        ref:"Instructore",
        required:[true, "El instructor es requerido"],
    },
    estado:{
        type:Number,
        default:1
    },
    createdAt:{
        type:String, 
        default:Date.now()
    }
})


//el model pide dos parametros 
//1. primer parametro la forma en que seguarda la coleccion den la BD
//2. el segundo parametro el schema que acabamos de crear
export default model("Ficha", InstructorSchema) 