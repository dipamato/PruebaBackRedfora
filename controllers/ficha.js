import Ficha from "../models/fichas.js"


const fichasGet = async(req, res) => {
    const fichas = await Ficha.find().populate("instructorLider")

    res.json({
      fichas
    })
}


const fichasPost = async function (req, res) {
    
    // la varibale body va a recibir todos los datos que envie el cliente
    const {numeroFicha, programa, instructorLider} = req.body
    console.log(req.body);
    //creamos una instancia del modelo y como parametro le enviamos todos los datos del body
    const ficha = new Ficha({numeroFicha, programa, instructorLider})

    //para guardar el registro en la base de datos
    await ficha.save()

    res.json({
      ficha
    })
  }


  const fichasPut = (req, res) =>{
    const { id } = req.params
    const {nombre, tipoDocumento, numeroDocumento, telefono, correo} = req.body

    const ficha = Ficha.findByIdAndUpdate(id, {nombre, tipoDocumento, numeroDocumento, telefono, correo})

    res.json({
      ficha
    })
    
  }


  const fichasChangeState = async(req, res) =>{
    const {id} = req.params
    const reg = await Ficha.findById(id)
    let ficha=null
    if (reg.estado){
        ficha = await Ficha.findByIdAndUpdate(id,{estado:false})
    }else{
        ficha = await Ficha.findByIdAndUpdate(id,{estado:true})
    }
    res.json({
        ficha,
    })
  }
  

export {fichasChangeState, fichasGet, fichasPost, fichasPut}