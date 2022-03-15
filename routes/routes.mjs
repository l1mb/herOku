import { Router } from "express";
import {mainController} from "../controllers/controller.mjs"


const router  = new Router();

router.get('/', mainController.getIndex);
router.get('/addPage', mainController.getAddPage);
router.get('/update/:id', mainController.getUpdatePage);

router.post('/add', mainController.addItem);
router.post('/update', mainController.updateItem);
router.post('/delete', mainController.deleteItem);

export default router;