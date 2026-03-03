import express,{Router} from 'express';
import ProductControllers from '../controllers/productControllers.ts';
import{ validateRegister} from '../middlewares/productMiddleware.ts'

const router:Router =express.Router();

router
    .post("/add", validateRegister, ProductControllers.postCreate)
    .get("/access", ProductControllers.getProdutc)


export default router;