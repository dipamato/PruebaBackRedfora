import { Router } from "express"
import { fichasChangeState, fichasGet, fichasPost, fichasPut } from "../controllers/ficha.js"
import { check } from "express-validator"
import { validarCampos } from "../middlewares/validar-campos.js"
import { existeFichaporId, existUsuarioporId } from "../helpers/validaciones-bd.js"


const router = Router()

router.get('/', fichasGet)

router.post('/',[
    check("numeroFicha", "El campo numero de ficha es obligatorio").notEmpty(),
    check("programa", "El programa es obligatorio").notEmpty(),
    check("instructorLider", "El instructor no es valido").isMongoId(),
    check("instructorLider").custom(id=>existUsuarioporId(id)),
    validarCampos
], fichasPost)


router.put('/:id',[
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(id=>existeFichaporId(id)),
    check("numeroFicha", "El campo numero de ficha es obligatorio").notEmpty(),
    check("programa", "El programa es obligatorio").notEmpty(),
    check("instructorLider", "El instructor no es valido").isMongoId(),
    validarCampos
], fichasPost)


router.put("/active/:id",[
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(id=>existUsuarioporId(id)),
    validarCampos
],fichasChangeState)

export default router