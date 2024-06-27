import {Router} from "express";
import groupRouter from "./group/group.router";


const router = Router();

router.use('/group', groupRouter)

export default router;