import express,{Router} from 'express';
import ProductControllers from '../controllers/productControllers.ts';
import{ validateAdd, validateID} from '../middlewares/productMiddleware.ts'

const router:Router =express.Router();

router
    .post("/add", validateAdd, ProductControllers.Create)
    .get("/access", ProductControllers.findAll)
    .get("/access/:id", validateID, ProductControllers.findByid)
    .put("/update/:id", validateID, ProductControllers.update)
    .delete("/remove/:id", validateID, ProductControllers.remove)


export default router;